import { apiClient } from './apiService';


export function getOpenings() {
  return apiClient.get("/openings?populate=*").then((res) => res.data);
}

export function getOpening(id: string | number) {
  return apiClient.get(`/openings/${id}?populate=*`).then((res) => res.data);
}

export function createOpening(data: unknown) {
  return apiClient.post("/openings", { data }).then((res) => res.data);
}

export function updateOpening(id: string | number, data: unknown) {
  return apiClient.put(`/openings/${id}`, { data }).then((res) => res.data);
}

export function deleteOpening(id: string | number) {
  return apiClient.delete(`/openings/${id}`).then((res) => res.data);
}
