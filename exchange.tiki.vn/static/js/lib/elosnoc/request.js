import axios from 'axios';
import {
    attach,
    getConfig
} from 'retry-axios';
import * as R from 'ramda';

const setupAxios = (configs) => {
    const {
        auth
    } = configs;
    attach();
    axios.defaults.raxConfig = {
        shouldRetry: (error) => {
            const raxConfig = getConfig(error);
            if (raxConfig.currentRetryAttempt >= raxConfig.retry) return false;
            return error ? .response ? .status === 401;
        },
        onRetryAttempt: () =>
            new Promise((resolve, reject) =>
                auth.getAccessToken().then(resolve).catch(reject)
            ),
    };
    axios.interceptors.request.use(
        function(config) {
            const {
                isPublic
            } = config;
            if (isPublic) {
                return Promise.resolve(config);
            }
            return auth
                .getSession()
                .then((session) =>
                    R.compose(
                        R.set(
                            R.lensPath(['headers', 'x-access-token']),
                            session.accessToken
                        ),
                        R.set(
                            R.lensPath(['headers', 'Authorization']),
                            R.when(Boolean, R.concat('Bearer '), session.accessToken)
                        )
                    )(config)
                );
        },
        function(error) {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        function(response) {
            return R.prop('data', response) || response;
        },
        function(error) {
            return Promise.reject(error ? .response ? .data || error);
        }
    );
    return configs;
};

export default setupAxios;