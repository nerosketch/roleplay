/* eslint-disable camelcase */
import { AxiosResponse, AxiosPromise } from 'axios'

export type IDRFListResponse<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export interface IDRFRequestListParameters {
  page: number
  page_size: number
  ordering?: string
  fields?: string
}

export type IDRFAxiosResponse<T> = AxiosResponse<T>
export type IDRFAxiosResponsePromise<T> = AxiosPromise<T>
export type IDRFAxiosResponseListPromise<T> = AxiosResponse<IDRFListResponse<T>>
