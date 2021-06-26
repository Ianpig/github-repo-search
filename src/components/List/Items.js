import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import { space } from 'styles/constant';
import commasNumber from 'utils/commasNumber';

function Items({ style, title, description, url, star = 0, type, date = new Date() }) {
    const lastUpdateDate = new Date(date);
    return (
        <div css={[containerStyle, style]}>
            <div css={itemStyle}>
                <a css={linkStyle} href={url} alt={title} target={`_${title}`}>
                    <Typography variant="subtitle1">{title}</Typography>
                </a>
            </div>
            <div css={itemStyle}>
                <Typography css={multipleLineStyle} variant="body2">
                    {description}
                </Typography>
            </div>
            <div css={[itemStyle, listStyle]}>
                {Boolean(type) && (
                    <Typography css={inlineItemStyle} variant="caption">
                        {type}
                    </Typography>
                )}
                <Typography css={inlineItemStyle} variant="caption">
                    Last Update: {lastUpdateDate.toLocaleDateString()} {}
                    {lastUpdateDate.toLocaleTimeString()}
                </Typography>
                <Typography css={inlineItemStyle} variant="caption">
                    Star: {commasNumber(star)}
                </Typography>
            </div>
        </div>
    );
}

Items.propTypes = {
    props: PropTypes.func
};

export default Items;

const containerStyle = css`
    min-height: ${space * 8}px;
    padding: ${space * 2}px 0;
`;

const itemStyle = css`
    padding-bottom: ${space}px;
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

const inlineItemStyle = css`
    min-width: 120px;
`;

const multipleLineStyle = css`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: ${space * 5}px;
`;
