import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/react';

import normalizeCss from 'emotion-normalize';

function GlobalCss({ styles = '' }) {
    return (
        <Global
            styles={css`
                ${normalizeCss}

                html,
                body {
                    height: 100%;
                    width: 100%;
                }

                #root {
                    height: 100%;
                    width: 100%;
                }
                ${styles}
            `}
        />
    );
}

GlobalCss.propTypes = {
    styles: PropTypes.string
};

export default GlobalCss;
