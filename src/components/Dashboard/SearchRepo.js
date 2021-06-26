import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

import SearchInput from 'components/Input/SearchInput';

import { space } from 'styles/constant';
function SearchRepo({ name, updateName }) {
    return (
        <div>
            <div css={itemStyle}>
                <SearchIcon css={iconStyle} />
                <Typography variant="h5">It's built for Search github repos</Typography>
            </div>
            <div css={itemStyle}>
                <SearchInput
                    defaultValue={name}
                    onChange={updateName}
                    placeholder="Please typein repo name"
                />
            </div>
        </div>
    );
}

SearchRepo.propTypes = {
    props: PropTypes.func
};

export default SearchRepo;

const itemStyle = css`
    display: flex;
    align-items: center;
    padding-bottom: ${space}px;
    min-height: ${space * 7}px;
`;

const iconStyle = css`
    margin-right: ${space}px;
`;
