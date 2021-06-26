import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { space } from 'styles/constant';

function EndFetcher({ isEnd, updateMoreRepos, isLoading }) {
    const { setNode, entry } = useIntersectionObserver({});

    useEffect(() => {
        if (!isLoading && !isEnd && entry.isIntersecting) {
            updateMoreRepos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [entry.isIntersecting]);
    return (
        <div css={endContainerStyle} ref={ref => setNode(ref)}>
            {isEnd && `-`}
            {isLoading && <CircularProgress size={32} />}
        </div>
    );
}

EndFetcher.propTypes = {
    isEnd: PropTypes.bool,
    updateMoreRepos: PropTypes.func,
    isLoading: PropTypes.bool
};

export default EndFetcher;

const endContainerStyle = css`
    text-align: center;
    padding: ${space}px 0;
`;
