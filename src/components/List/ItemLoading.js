import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Skeleton from '@material-ui/lab/Skeleton';

import { space } from 'styles/constant';

function ItemLoading() {
    return (
        <div css={containerStyle}>
            <div css={itemStyle}>
                <Skeleton css={titltStyle} variant="text" />
            </div>
            <div css={itemStyle}>
                <Skeleton variant="text" />
            </div>
            <div css={[itemStyle, listStyle]}>
                <Skeleton css={inlineItemStyle} variant="text" />
                <Skeleton css={inlineItemStyle} variant="text" />
                <Skeleton css={inlineItemStyle} variant="text" />
            </div>
        </div>
    );
}

ItemLoading.propTypes = {
    props: PropTypes.func
};

export default ItemLoading;

const containerStyle = css`
    min-height: ${space * 8}px;
    padding: ${space * 2}px 0;
`;

const itemStyle = css`
    padding-bottom: ${space}px;
`;

const titltStyle = css`
    width: ${space * 11}px;
`;

const inlineItemStyle = css`
    min-width: ${space * 15}px;
`;

const listStyle = css`
    & > span {
        display: inline-block;
        margin-right: ${space * 2}px;
    }
`;
