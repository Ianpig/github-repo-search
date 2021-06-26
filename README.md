# This project use Github repo search api

It was deploy on [Vercel](https://github-repo-search-six.vercel.app/).

## Run project

```
npm start
```

### Vitural Scroll important const

It use scroll event with scrollTop to handle Vitural Scroll.
It need default

-   src/hooks/useVituralScroll.js

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
