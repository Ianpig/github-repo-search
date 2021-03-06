import { useRef, useState, useEffect } from 'react';

export default function useVirtualScroll({ unitHeight, hiddenCount = 2 }) {
    const [scrollRange, setScrollRange] = useState(0);
    const ref = useRef();

    function onScroll(e) {
        setScrollRange(e.target.scrollTop);
    }

    useEffect(() => {
        const scrollContainer = ref.current;
        if (ref.current) {
            setScrollRange(scrollContainer.scrollTop);
            scrollContainer.addEventListener('scroll', onScroll);
            return () => scrollContainer.removeEventListener('scroll', onScroll);
        }
        setScrollRange(scrollContainer.scrollTop);
    }, []);

    const startPoint = Math.max(Math.floor(scrollRange / unitHeight) - hiddenCount, 0);
    const containerHeight = ref.current ? ref.current.clientHeight : 100;
    const renderCounts = Math.ceil(containerHeight / unitHeight) + hiddenCount * 2;

    const offsetY = startPoint * unitHeight;

    return {
        ref,
        offsetY,
        renderCounts,
        startPoint
    };
}
