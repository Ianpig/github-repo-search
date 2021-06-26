import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';

import Items from 'components/List/Items';
import ItemLoading from 'components/List/ItemLoading';
import useVituralScroll from 'hooks/useVituralScroll';
import EndFetcher from 'components/Dashboard/EndFetcher';

const loadingArr = [...Array(3).keys()];

const MemoItems = React.memo(Items);

function RepoVituralScroller({ name, data = [], isLoading, isIniting, updateMoreRepos, isEnd }) {
    const unitHeight = window.matchMedia('(max-width: 480px)').matches ? 192 : 156;
    const { ref, offsetY, startPoint, renderCounts } = useVituralScroll({
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
                    {[...new Array(renderCounts)].map((_, index) => {
                        const selectData = data[index + startPoint];
                        if (!selectData) {
                            return null;
                        }
                        const {
                            full_name,
                            html_url,
                            stargazers_count,
                            language,
                            description,
                            updated_at
                        } = data[index + startPoint];
                        return (
                            // use id will appear duplicate key
                            <div key={`${name}_${index + startPoint}`}>
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
                    {!isIniting && data.length < renderCounts + startPoint && (
                        <EndFetcher
                            isEnd={isEnd}
                            isLoading={isLoading}
                            updateMoreRepos={updateMoreRepos}
                        />
                    )}
                    {isIniting &&
                        loadingArr.map((_, i) => (
                            <div key={i}>
                                <ItemLoading />
                                <Divider />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

RepoVituralScroller.propTypes = {
    name: PropTypes.string,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    isIniting: PropTypes.bool,
    updateMoreRepos: PropTypes.func,
    isEnd: PropTypes.bool
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
