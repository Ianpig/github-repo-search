import React, { Fragment } from 'react';
// import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Items from 'components/List/Items';
import ItemLoading from 'components/List/ItemLoading';

import Divider from '@material-ui/core/Divider';

const loadingArr = [...Array(10).keys()];
function RepoList({ isLoading, list }) {
    return (
        <div>
            {list.map(
                ({
                    id,
                    full_name,
                    html_url,
                    stargazers_count,
                    language,
                    description,
                    updated_at
                }) => (
                    <Fragment key={id}>
                        <Items
                            title={full_name}
                            description={description}
                            star={stargazers_count}
                            url={html_url}
                            type={language}
                            date={updated_at}
                        />
                        <Divider />
                    </Fragment>
                )
            )}
            {isLoading && loadingArr.map(() => <ItemLoading />)}
        </div>
    );
}

RepoList.propTypes = {
    props: PropTypes.func
};

export default RepoList;
