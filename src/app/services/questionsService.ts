/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiClient } from './apiService';

export function getQuestions() {
  return apiClient.get('/questions').then((res) => res.data);
}

export function saveAnswer(data: any) {
  return apiClient.post('/answers', data).then((res) => res);
}
