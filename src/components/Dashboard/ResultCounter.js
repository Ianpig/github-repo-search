import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

import { space } from 'styles/constant';
import commasNumber from 'utils/commasNumber';

function ResultCounter({ isLoading, counter }) {
    return (
        <div css={itemStyle}>
            {isLoading && <Skeleton css={loadingStyle} variant="text" />}
            {!isLoading && (
                <Typography variant="subtitle1">
                    {commasNumber(counter)} repository results
                </Typography>
            )}
        </div>
    );
}

ResultCounter.propTypes = {
    isLoading: PropTypes.bool,
    counter: PropTypes.number
};

export default ResultCounter;

const itemStyle = css`
    display: flex;
    align-items: center;
    padding-bottom: ${space}px;
    min-height: ${space * 7}px;
`;

const loadingStyle = css`
    width: 200px;
`;
