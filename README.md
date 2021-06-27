# This project use Github repo search api

It was deploy on [Vercel](https://github-repo-search-six.vercel.app/).

## Run project

```
npm start
```

## package.json modules

-   create-react-app
-   react
-   emotion
-   material-ui

## Important implement

-   Virtual scroll
-   Infinite scroll
-   api hit rate manager

### Virtual Scroll

It use scroll event with scrollTop to handle Virtual Scroll.
A virtual component need three thing.

1. In View start index.
2. scroll container scroll range.
3. how many items i can render. ( caculate by overflow hidden container)

![virtual scroll](https://work.ianccy.com/img/vituralscroll.png)

-   src/hooks/useVirtualScroll.js

```
...
    const startPoint = Math.max(Math.floor(scrollRange / unitHeight) - hiddenCount, 0);
    const containerHeight = ref.current ? ref.current.clientHeight : 100;
    const renderCounts = Math.ceil(containerHeight / unitHeight) + hiddenCount * 2;

    const offsetY = startPoint * unitHeight;
...
```

`startPoint`
First, i use scrollTop (scrollRange) to division `unitHeight`. It needs to remove decimal because i just want to get start index.

I minus `hiddenCount` in oder to get hidden DOM index which improves user experience.
Math.max will avoid negative number when start index less than `hiddenCount`.

`hiddenCount`
It is defined hidden DOM count.

`containerHeight`
It's a reference DOM element from parent scroll container.

`renderCounts`
I use container height to be divided by `unitHeight` makes item's count in view.
Then use Math.ceil to carry decimal to avoid less count of render which can not show item.

The reason why `hiddenCount * 2` is to increase hidden count above and below the in view count.

### api hit rate limit

github api has hit rate limit for noLoign user. 10 times per 1 minute.
I call `https://api.github.com/rate_limit` api to init hit limit info. `RateManager` is object instance, so i can get share limit rate value cross components.

-   src/utils/rateManager.js

```
    return {
        init,
        checkIsExpire,
        getRemainingTimes,
        decreaseRemaingTimes,
        getExpireDate
    };
```

I call `init` to initialize hit rate info. Every api call need to call `checkIsExpire` to check whether refresh hit rate info because github will reset after one minute. `getRemainingTimes` let me know is passed or not.
After api call success, i call `decreaseRemaingTimes` to decrease remaining times.

### Infinite scroll

I use `IntersectionObserver` to handle infinite scroll. I create `EndFetcher` component in list bottom.
When `EndFetcher` is isIntersecting, it will add page count. Component useEffect is listening page dependency to fetch repo data.

-   src/hooks/useIntersectionObserver.js

```
...
    const [entry, setEntry] = useState({});
    const [node, setNode] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
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
...
```
