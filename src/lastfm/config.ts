/* eslint-disable no-process-env */
export const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
export const LASTFM_USER = process.env.LASTFM_USER;
export const LASTFM_PERIOD = process.env.LASTFM_PERIOD || '7day';

export const PORT: number = process.env.PORT
  ? parseInt(process.env.PORT, 10)
  : 5000;
