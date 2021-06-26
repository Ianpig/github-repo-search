import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import RepoVituralScroller from 'components/Dashboard/RepoVituralScroller';

function RepoList({ name, isLoading, isIniting, list, updateMoreRepos, isEnd }) {
    return (
        <div css={containerStyle}>
            <RepoVituralScroller
                data={list}
                isIniting={isIniting}
                isLoading={isLoading}
                updateMoreRepos={updateMoreRepos}
                isEnd={isEnd}
                name={name}
            />
        </div>
    );
}

RepoList.propTypes = {
    props: PropTypes.func,
    name: PropTypes.string,
    isLoading: PropTypes.bool,
    isIniting: PropTypes.bool,
    list: PropTypes.array,
    updateMoreRepos: PropTypes.func,
    isEnd: PropTypes.bool
};

export default RepoList;

const containerStyle = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
