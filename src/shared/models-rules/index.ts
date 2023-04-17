import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
  return (request.user && request.user.id) || 'b24fdd05-94df-469d-8016-6d0b837a17ee';
}
