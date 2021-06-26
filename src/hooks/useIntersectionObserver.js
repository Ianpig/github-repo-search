import { useEffect, useState } from 'react';

export default function useIntersectionObserver({ root = null, optoins = {} }) {
    const [entry, setEntry] = useState({});
    const [node, setNode] = useState(null);

    useEffect(() => {
        const observer = new window.IntersectionObserver(([entry]) => setEntry(entry), {
            root,
            ...optoins
        });

        if (node) {
            observer.observe(node);
            return () => observer.disconnect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [node]);

    return { setNode, entry };
}
