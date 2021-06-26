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
First, i use scrollTop (scrollRange) division unitHeight. It need remove decimal,because i just want to get start index.

And reduce `hiddenCount` to get before visual DOM index. Improve user experience.
Math.max avoid negative number when start index less than `hiddenCount`.

`hiddenCount`
It use for defined hidden DOM counts.

`containerHeight`
It's a reference dom element from parent scroll container.

`renderCounts`
Use container height to calculate item count in view.
And use Math.ceil to carry negative number. Avoid less render count could not show item.

`hiddenCount * 2` to add before and after in view count.
