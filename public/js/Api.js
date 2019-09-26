class Api {
    static get(url) {
        return fetch(url)
            .then(response => {
                return response;
        });
    }
}