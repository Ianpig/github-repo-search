import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import SearchRepo from 'components/Dashboard/SearchRepo';
import ResultCounter from 'components/Dashboard/ResultCounter';
import RepoList from 'components/Dashboard/RepoList';

import useSetTtitle from 'hooks/useSetTtitle';

import { getReposApi } from 'api/getRepos';

function Dashboard() {
    useSetTtitle({ title: 'GitHub Repos Search' });

    const [repoName, setRepoName] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [searchSort, setSearchSort] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [repos, setRepos] = useState([]);
    const [counter, setCounter] = useState(0);

    function updateRepoName(value) {
        setRepoName(value);
    }

    async function getRepos({ name, searchSort }) {
        try {
            setIsLoading(true);
            // eslint-disable-next-line no-unused-vars
            const { httpStatus, payload: { incomplete_results, items, total_count } = {} } =
                await getReposApi({ name, searchSort });
            if (httpStatus === 200) {
                setRepos(items);
                setCounter(total_count);
            }
        } catch (error) {
            // error handle
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (Boolean(repoName)) {
            getRepos({ name: repoName, searchSort: searchSort });
        }
    }, [repoName, searchSort]);

    console.log(repoName);

    return (
        <Layout>
            <SearchRepo name={repoName} updateName={updateRepoName} />
            <ResultCounter counter={counter} isLoading={isLoading} />
            <RepoList isLoading={isLoading} list={repos} />
        </Layout>
    );
}

Dashboard.propTypes = {
    props: PropTypes.func
};

export default Dashboard;
