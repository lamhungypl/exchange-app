import axios from 'axios';

import { API, me } from '@config';

export const getUserInfo = () => axios(me.ME);
export const getRewards = () => axios(me.REWARDS);
export const getBalances = () => axios(API.SANDSEEL.ACCOUNT.BALANCES);
