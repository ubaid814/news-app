/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import queryString from 'query-string';
import './interceptors';


export class HttpService {
  getApiKey() {
    return import.meta.env.VITE_NEWS_API_KEY;
  }
  getTimeOutDuration() {
    // all api calls will be timeout
    // if server didn't responsed in 15 seconds
    const timeOutDuration = 900000;
    return timeOutDuration;
  }

  async getHeaders(options?: IHttpRequestOptions): Promise<Record<string, string>> {
    let headers: Record<string, string> = {};
    const apiKey = this.getApiKey();
    
    // eslint-disable-next-line prefer-destructuring
    if (options && options.headers) {
      const {headers: customHeaders} = options;
      headers = customHeaders;
      // return headers;
    }
    if(apiKey) {
      headers['X-Api-Key'] = apiKey;
    }
    
    if (!headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    headers['App-Type'] = 'CONSUMER';
    // prevent axios from caching the API data
    headers['Cache-Control'] = 'no-cache';
    return headers;
  }


  async get(
    url: string, queryParams: Record<string, string> | null = null,
    options?: IHttpRequestOptions,
    timeOut?: number,
  ) : Promise<any> {
    const headers: Record<string, string> = await this.getHeaders(options);
    return axios.get(url, {
      params: queryParams,
      paramsSerializer: function (params) {
        return queryString.stringify(params);
      },
      headers,
      timeout: timeOut ? timeOut : this.getTimeOutDuration(),
    });
  }

  async post(url: string, postData: unknown, options?: IHttpRequestOptions, timeOut?: number) : Promise<unknown> {
    const headers: Record<string, string> = await this.getHeaders(options);
    return axios.post(url, postData, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }

  async put(url: string, postData: unknown, queryParams: Record<string, any> | null = null,
    options?: IHttpRequestOptions,
    timeOut?: number,
  ) : Promise<unknown> {
    const headers: Record<string, string> = await this.getHeaders(options);

    return axios.put(url, postData, {
      params: queryParams,
      paramsSerializer: function (params) {
        return queryString.stringify(params);
      },
      headers,
      timeout: timeOut ? timeOut : this.getTimeOutDuration(),
    });
  }

  async patch(url: string, postData: unknown, options?: IHttpRequestOptions, timeOut?: number) : Promise<unknown> {
    const headers: Record<string, string> = await this.getHeaders(options);

    return axios.patch(url, postData, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }

  async delete(url: string, options?: IHttpRequestOptions, timeOut?: number,) : Promise<unknown> {
    const headers: Record<string, string> = await this.getHeaders(options);

    return axios.delete(url, { headers, timeout: timeOut ? timeOut : this.getTimeOutDuration() });
  }
}
