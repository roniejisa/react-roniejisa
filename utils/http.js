import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/";
class Http {
	instance;
	constructor() {
		this.instance = axios.create({
			baseURL,
			timeout: 10000,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
}

const http = new Http().instance;

export const httpGet = (endPoint, options = {}) =>
	http.get(endPoint, {
		...options,
	});

export const httpPost = (endPoint, data, headers = {}) =>
	http.post(endPoint, data, {
		headers,
	});

export const httpPut = (endPoint, data, headers = {}) =>
	http.put(endPoint, data, {
		headers,
	});

export const httpPatch = (endPoint, data, headers = {}) =>
	http.patch(endPoint, data, {
		headers,
	});

export const httpDelete = (endPoint, data, headers = {}) =>
	http.delete(endPoint, data, {
		headers,
	});

export const httpPostForm = (endPoint, data, headers = {}) =>
	http.postForm(endPoint, data, {
		headers,
	});

export const httpPutForm = (endPoint, data, headers = {}) =>
	http.putForm(endPoint, data, {
		headers,
	});

export const httpPatchForm = (endPoint, data, headers = {}) =>
	http.patchForm(endPoint, data, {
		headers,
	});

export default http;