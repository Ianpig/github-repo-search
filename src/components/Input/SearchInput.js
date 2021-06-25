import React, { useState } from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { space } from 'styles/constant';

function SearchInput({ placeholder = '', onChange = () => {}, defaultValue = '' }) {
    const [value, setValue] = useState(defaultValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            onChange(value);
        }
    }

    function handleUpdate() {
        onChange(value);
    }

    return (
        <Paper css={containerStyle}>
            <InputBase
                value={value}
                css={inputStyle}
                placeholder={placeholder}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <IconButton aria-label="search" onClick={handleUpdate}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.string
};

export default SearchInput;

const containerStyle = css`
    width: 100%;
    display: flex;
    padding-left: ${space * 2}px;
`;

const inputStyle = css`
    flex-grow: 1;
`;
