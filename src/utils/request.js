import QueryString from 'query-string';
import configs from 'configs';
import Auth from 'utils/auth';
import { isEmptyObject } from 'utils/object';

export class FetchError extends Error {
  constructor(data) {
    super();
    this.name = 'FetchError';
    this.data = data;
    this.stack = (new Error()).stack;
  }
}

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const request = async (_endpoint, method, body, customHeaders = {}, withAuth = true) => {
  let endpoint = _endpoint;
  // If not external domain, add API_URL to endpoint
  if (!_endpoint.startsWith('http')) {
    endpoint = configs.apiUrl + endpoint;
  }
  const headers = {
    ...defaultHeaders,
    ...customHeaders,
  };
  if (withAuth) {
    const accessToken = Auth.getAccessToken();
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  let data = null;
  if (body) {
    if (headers['Content-Type'] === 'application/json') {
      data = JSON.stringify(body);
    } else {
      delete headers['Content-Type'];
      data = body;
    }
  } else {
    delete headers['Content-Type'];
  }
  const fetchOpts = {
    method,
    headers,
  };
  if (method !== 'HEAD' && method !== 'GET') {
    fetchOpts.body = data;
  }
  const response = await fetch(endpoint, fetchOpts);
  const json = await response.json();

  if (response.status < 200 || response.status >= 300) {
    const errorData = json || {
      code: response.status,
      message: response.statusText,
    };
    throw new FetchError(errorData);
  }
  return json;
};

export const get = (endpoint, params, ...rest) => {
  let url = endpoint;
  if (params && !isEmptyObject(params)) {
    url += `?${QueryString.stringify(params, { encode: true })}`;
  }
  return request(url, 'GET', ...rest);
};

export const post = (endpoint, body, ...rest) => (
  request(endpoint, 'POST', body, ...rest)
);

export const put = (endpoint, body, ...rest) => (
  request(endpoint, 'PUT', body, ...rest)
);

export const del = (endpoint, body, ...rest) => (
  request(endpoint, 'DELETE', body, ...rest)
);

export default {
  get,
  post,
  put,
  del,
};
