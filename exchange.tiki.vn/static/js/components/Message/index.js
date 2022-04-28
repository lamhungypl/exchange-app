import * as R from 'ramda';
import React, {
    useCallback,
    useEffect
} from 'react';
import {
    toast,
    Toaster
} from 'react-hot-toast';
import {
    useDispatch
} from 'react-redux';

import styles from './style.module.scss';
export const ToastCustom = ({
    message,
    id
}) => ( <
    div className = {
        styles.go2072408551
    } >
    <
    div className = {
        styles.go685806154
    } >
    <
    div className = {
        styles.go1858758034
    } > < /div> <
    div className = {
        styles.go1579819456
    } >
    <
    div className = {
        styles.go2344853693
    } > < /div> <
    /div> <
    /div> <
    div role = "status"
    aria - live = "polite"
    className = {
        styles.go318386747
    } > {
        message
    } <
    /div> <
    button onClick = {
        () => toast.dismiss(id)
    } > Dismiss < /button> <
    /div>
);

function ToastControler({
    broker
}) {
    const dispatch = useDispatch();
    const showToast = useCallback(
        (toasts) => {
            if (toasts.length) {
                const ids = R.map(
                    (t) => toast[t.type](t.message, {
                        id: t.id
                    }),
                    toasts
                );
                dispatch({
                    type: 'message/flush',
                    payload: R.map(R.objOf('id'), ids)
                });
            }
        }, [dispatch]
    );
    useEffect(() => {
        return broker.register('toast', showToast);
    }, [broker, showToast]);
    return ( <
        Toaster position = "bottom-right"
        reverseOrder = {
            false
        }
        gutter = {
            8
        }
        containerClassName = ""
        containerStyle = {
            {
                top: 20,
                left: 20,
                bottom: 20,
                right: 20,
            }
        }
        toastOptions = {
            {
                className: '',
                duration: 3000,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                    maxWidth: '450px',
                },
                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }
        }
        />
    );
}

export default ToastControler;