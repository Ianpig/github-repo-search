import { getHitLimitApi } from 'api/getRepos';

const rateManager = () => {
    let remainingTimes = null;
    let expireTime = null;

    const init = async () => {
        const res = await getHitLimitApi();
        if (res.httpStatus === 200) {
            const rate = res.payload.resources.search;
            const { remaining, reset } = rate;
            remainingTimes = remaining;
            expireTime = new Date(reset * 1000);
        }
        return res;
    };

    const checkIsExpire = () => {
        if (expireTime === null || expireTime < new Date()) {
            return true;
        }
        return false;
    };

    const getExpireDate = () => {
        return new Date(expireTime);
    };

    const getRemainingTimes = () => {
        return remainingTimes;
    };

    const decreaseRemaingTimes = () => {
        remainingTimes -= 1;
        return remainingTimes;
    };

    return {
        init,
        checkIsExpire,
        getRemainingTimes,
        decreaseRemaingTimes,
        getExpireDate
    };
};

export default rateManager();
