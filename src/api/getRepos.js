import queryString from 'query-string';

import { generateFetch, generateFetchOptions } from 'api/commom';
import rateManager from 'utils/rateManager';

const searchQueryURL = 'https://api.github.com';
const fetchApi = generateFetch(searchQueryURL);

export async function checkRemaingHitLimit() {
    const isNeedInit = rateManager.checkIsExpire();
    if (isNeedInit) {
        await rateManager.init();
    }
    const isPassed = rateManager.getRemainingTimes() > 0;
    if (!isPassed) {
        const resetTime = rateManager.getExpireDate();
        // eslint-disable-next-line no-throw-literal
        throw { code: 'rateManager block', message: 'You reached the api hit limit', resetTime };
    }
    return isPassed;
}

export async function getReposApi({ name, sort = '', perPage = 30, page = 1 }) {
    await checkRemaingHitLimit();
    const qs = queryString.stringify({ page, per_page: perPage, q: name, sort });
    return fetchApi(
        `/search/repositories?${qs}`,
        generateFetchOptions({ method: 'GET' }),
        rateManager.decreaseRemaingTimes
    );
}

export async function getHitLimitApi() {
    return fetchApi(`/rate_limit`, generateFetchOptions({ method: 'GET' }));
}
