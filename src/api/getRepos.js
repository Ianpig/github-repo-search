import queryString from 'query-string';

import { generateFetch, generateFetchOptions } from 'api/commom';

// doc https://docs.github.com/en/rest/reference/search

const searchQueryURL = 'https://api.github.com';
const fetchApi = generateFetch(searchQueryURL);

export function getReposApi({ name, sort = '', perPage = 30, page = 1 }) {
    const qs = queryString.stringify({ page, per_page: perPage, q: name, sort });
    return fetchApi(`/search/repositories?${qs}`, generateFetchOptions({ method: 'GET' }));
}
