export const breakpoints = {
    mobile: 480,
    pad: 768,
    laptop: 1024,
    desktop: 1440
};

export function below(size) {
    const breakpoint = breakpoints[size] || '';
    if (breakpoint) {
        return `@media screen and (max-width: ${breakpoint}px)`;
    }
}
