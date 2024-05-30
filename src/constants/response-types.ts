export enum RESPONSE_TYPES {
    SUCCESS =  'success',
    ERROR_RESPONSE = 'error.response',
    ERROR_REQUEST = 'error.request',
    ERROR = 'error',
    NETWORK_ERROR = 'Network Error',
  }

export enum STATUS_CODES {
    SUCCESS = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503,
    GATEWAY_TIMEOUT = 504,
    REQUEST_TIMEOUT = 408,
  }
