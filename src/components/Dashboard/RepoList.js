import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Items from 'components/List/Items';

function RepoList({ list }) {
    console.log(list);
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
                    <Items
                        key={id}
                        title={full_name}
                        description={description}
                        star={stargazers_count}
                        url={html_url}
                        type={language}
                        date={updated_at}
                    />
                )
            )}
        </div>
    );
}

RepoList.propTypes = {
    props: PropTypes.func
};

export default RepoList;
