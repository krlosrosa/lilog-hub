export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiErrorBody = {
  statusCode: number;
  message: string | string[];
  error?: string;
};
