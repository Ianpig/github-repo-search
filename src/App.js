import React from 'react';

import Dashboard from 'components/Dashboard/Dashboard';

import GlobalCss from 'styles/GlobalCss';
import { background, content } from 'styles/color';

function App() {
    return (
        <>
            <GlobalCss styles={advanceStylesStr} />
            <Dashboard />
        </>
    );
}

export default App;

const advanceStylesStr = `
    body {
        color: ${content};
        background-color: ${background};
    }
`;
