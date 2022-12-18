import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
export class Api {
  constructor(apiUrl: string) {
    this.instance = axios.create({
      baseURL: apiUrl,
      timeout: 20000,
      withCredentials: true,
    });
  }
  private instance!: AxiosInstance;

  public request<T = any>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance.request(config);
  }
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance.get(url, config);
  }
  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.instance.delete(url, config);
  }
  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.instance.head(url, config);
  }
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.instance.post(url, data, config);
  }
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.instance.put(url, data, config);
  }
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): AxiosPromise<T> {
    return this.instance.patch(url, data, config);
  }
}
