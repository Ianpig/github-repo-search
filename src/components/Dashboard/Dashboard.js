import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'components/Layout';
import SearchRepo from 'components/Dashboard/SearchRepo';

function Dashboard() {
    return (
        <Layout>
            <SearchRepo />
        </Layout>
    );
}

Dashboard.propTypes = {
    props: PropTypes.func
};

export default Dashboard;
