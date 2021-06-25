import React from 'react';

import GlobalCss from 'styles/GlobalCss';
import { dark, darkContract } from 'styles/color';

function App() {
    return (
        <>
            <GlobalCss styles={advanceStylesStr} />
            RRR
        </>
    );
}

export default App;

const advanceStylesStr = `
    body {
        color: ${darkContract};
        background-color: ${dark};
    }
`;
