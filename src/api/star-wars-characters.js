const API_URL = 'https://swapi.dev/api/people'

export const getPage = (pageNumber = 1) => {
    return fetch(`${API_URL}?page=${pageNumber}`, {
        method: 'GET',
    }).then(response => response.results)
}
