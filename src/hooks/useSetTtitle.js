import { useEffect } from 'react';
import PropTypes from 'prop-types';

function useSetTitle({ title }) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);
}

useSetTitle.propTypes = {
    title: PropTypes.string
};

export default useSetTitle;
