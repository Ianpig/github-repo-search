import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { space } from 'styles/constant';
import commasNumber from 'utils/commasNumber';

function Items({ style, title, description, url, star, type, date }) {
    return (
        <div css={[itemStyle, style]}>
            <a css={linkStyle} href={url} alt={title} target={`_${title}`}>
                <Typography variant="subtitle1">{title}</Typography>
            </a>
            <Typography variant="body2">{description}</Typography>
            <div css={listStyle}>
                <Typography variant="caption">language: {type}</Typography>
                <Typography variant="caption">Last Update: {date}</Typography>
                <Typography variant="caption">Star: {commasNumber(star)}</Typography>
            </div>
        </div>
    );
}

Items.propTypes = {
    props: PropTypes.func
};

export default Items;

const itemStyle = css`
    min-height: ${space * 8}px;
    padding: ${space * 2}px 0;
`;

const linkStyle = css`
    text-decorate: none;
    display: inline-block;
`;

const listStyle = css`
    & > span {
        display: inline-block;
        margin-right: ${space * 2}px;
    }
`;
