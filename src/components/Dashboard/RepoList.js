import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import RepoVituralScroller from 'components/Dashboard/RepoVituralScroller';

function RepoList({ isLoading, list }) {
    return (
        <div css={containerStyle}>
            <RepoVituralScroller data={list} isLoading={isLoading} />
        </div>
    );
}

RepoList.propTypes = {
    props: PropTypes.func
};

export default RepoList;

const containerStyle = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
