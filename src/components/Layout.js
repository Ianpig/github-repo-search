import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { space } from 'styles/constant';
import { below } from 'styles/breakPoint';

function Layout({ children }) {
    return <div css={containerStyle}>{children}</div>;
}

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;

const containerStyle = css`
    width: 1080px;
    margin: 0 auto;
    padding: ${space * 4}px 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    ${below('desktop')} {
        width: 880px;
    }
    ${below('laptop')} {
        width: 720px;
    }
    ${below('pad')} {
        width: 480px;
    }
    ${below('mobile')} {
        width: 100%;
    }
`;
