import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import SearchRepo from 'components/Dashboard/SearchRepo';
import ResultCounter from 'components/Dashboard/ResultCounter';
import RepoList from 'components/Dashboard/RepoList';
import NotifyLabel from 'components/Notify/NotifyLabel';

import useSetTtitle from 'hooks/useSetTtitle';

import { getReposApi } from 'api/getRepos';

const perPage = 30;
function Dashboard() {
    useSetTtitle({ title: 'GitHub Repos Search' });

    const [isEnd, setIsEnd] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [page, setPage] = useState(1);

    const [repoName, setRepoName] = useState('');
    const [repos, setRepos] = useState([]);
    const [counter, setCounter] = useState(0);

    function updateResetRepoName(value) {
        setRepoName(value);
        setPage(1);
        setIsEnd(false);
    }

    function errorHandle(error) {
        if (
            error.httpStatus === 403 &&
            error.payload.message.indexOf(`API rate limit exceeded`) > -1
        ) {
            setError(`API rate limit exceeded`);
        } else {
            setError(`Unexpected Error`);
        }
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    }

    async function getRepos({ name, searchSort, page }) {
        try {
            setIsLoading(true);
            const { httpStatus, payload: { items, total_count } = {} } = await getReposApi({
                name,
                searchSort,
                page,
                perPage
            });
            if (httpStatus === 200) {
                if (page === 1) {
                    setRepos(items);
                } else {
                    setRepos(prevItems => [...prevItems, ...items]);
                }

                setCounter(total_count);
                if (items.length < perPage) {
                    setIsEnd(true);
                }
            }
        } catch (error) {
            errorHandle(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!error && Boolean(repoName)) {
            getRepos({ name: repoName, page });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, repoName]);

    function handleUpdateMoreRepos() {
        if (!error && !isLoading) {
            setPage(prevPage => prevPage + 1);
        }
    }

    function closeErrorNotify() {
        setError('');
    }

    const isIniting = page === 1 && isLoading;

    return (
        <Layout>
            <SearchRepo name={repoName} updateName={updateResetRepoName} />
            <ResultCounter counter={counter} isLoading={isIniting} />
            <RepoList
                isLoading={isLoading}
                isIniting={isIniting}
                list={isIniting ? [] : repos}
                updateMoreRepos={handleUpdateMoreRepos}
                isEnd={isEnd}
                name={repoName}
            />
            <NotifyLabel open={Boolean(error)} closeNotify={closeErrorNotify} label={error} />
        </Layout>
    );
}

Dashboard.propTypes = {
    props: PropTypes.func
};

export default Dashboard;
