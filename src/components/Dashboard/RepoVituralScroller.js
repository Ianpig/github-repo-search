import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';

import Items from 'components/List/Items';
import ItemLoading from 'components/List/ItemLoading';
import useVituralScroll from 'hooks/useVituralScroll';

const loadingArr = [...Array(3).keys()];

const MemoItems = React.memo(Items);

function RepoVituralScroller({ data = [], isLoading }) {
    const unitHeight = 156;
    const { ref, offsetY, startPoint, showCounts } = useVituralScroll({
        itemCount: data.length,
        unitHeight
    });

    const totalHeight = data.length * unitHeight;

    return (
        <div css={containerStyle} ref={ref}>
            <div css={listHeightStyle(totalHeight)}>
                <div
                    css={css`
                        transform: translateY(${offsetY}px);
                    `}
                >
                    {[...new Array(showCounts)].map((_, index) => {
                        const selectData = data[index + startPoint];
                        if (!selectData) {
                            return null;
                        }
                        const {
                            id,
                            full_name,
                            html_url,
                            stargazers_count,
                            language,
                            description,
                            updated_at
                        } = data[index + startPoint];
                        return (
                            <div key={id}>
                                <MemoItems
                                    title={full_name}
                                    description={description}
                                    star={stargazers_count}
                                    url={html_url}
                                    type={language}
                                    date={updated_at}
                                />
                                <Divider />
                            </div>
                        );
                    })}
                    {isLoading && loadingArr.map((_, i) => <ItemLoading key={i} />)}
                </div>
            </div>
        </div>
    );
}

RepoVituralScroller.propTypes = {
    props: PropTypes.func
};

export default RepoVituralScroller;

const containerStyle = css`
    flex-grow: 1;
    flex: 1 0 400px;
    overflow-y: auto;
`;

const listHeightStyle = height => css`
    ${Boolean(height)
        ? `height: ${height}px;`
        : `flex-grow: 1;
    `}
    overflow: hidden;
    position: relative;
`;
