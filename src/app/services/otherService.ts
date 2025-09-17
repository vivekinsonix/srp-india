/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient } from './apiService';

export function createSuppliers(payload: any) {
  return apiClient.post('/suppliers', payload).then((res) => res.data);
}
