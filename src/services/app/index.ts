/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpService } from '../http';
import { prepareErrorResponse, prepareResponseObject } from '../http/response';
import { RESPONSE_TYPES } from '../../constants/response-types';

export class AppService extends HttpService {
  fetchSources = async (baseUrl: string, proxyUrl:string): Promise<any>  => {
    try {
      const apiResponse = await this.get(`${proxyUrl}${baseUrl}/top-headlines/sources`,undefined);

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
  fetchArticles = async (baseUrl: string, proxyUrl:string, _requestPayload: Record<string, string>): Promise<any>  => {
    try {
      const apiResponse = await this.get(`${proxyUrl}${baseUrl}/everything`,_requestPayload);

      return prepareResponseObject(apiResponse, RESPONSE_TYPES.SUCCESS);
    } catch (error) {
      throw prepareErrorResponse(error);
    }
  };
}
