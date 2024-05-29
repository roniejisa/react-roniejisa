export const requestClient = {
    url: "",
    token: null,
    send: async function (url, method = "GET", body = null, headers = {}, params = {}) {
        const initialHeader = {
            "Content-Type": "application/json",
        };
        try {
            if (this.token) {
                initialHeader.Authorization = `Bearer ${this.token}`;
            }
            const options = {
                method,
                headers: { ...initialHeader, ...headers },
            };

            if (body) {
                options.body = JSON.stringify(body);
            }
            if (params) {
                this.url += url + "?" + new URLSearchParams(params).toString();
            }

            const response = await fetch(url, options);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return { response, data };
        } catch (e) {
            throw new Error(e.message);
        }
    },
    get: function (url, params = {}, headers = {}) {
        return this.send(url, "GET", null, headers, params);
    },
    post: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "POST", body, headers, params);
    },
    put: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "PUT", body, headers, params);
    },
    patch: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "PATCH", body, headers, params);
    },
    delete: function (url, body = {}, headers = {}, params = {}) {
        return this.send(url, "DELETE", body, headers, params);
    },
};
