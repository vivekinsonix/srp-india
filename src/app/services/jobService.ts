import { apiClient } from './apiService';


export function getOpenings() {
  return apiClient.get("/job-openings?populate=*").then((res) => res.data);
}

export function getPaginatedOpenings(pageno=1, records=10) {
  return apiClient.get(`/job-openings?createdAt:desc&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res) => res.data);
}

export function getOpening(id: string | number) {
  return apiClient.get(`/job-openings/${id}?populate=*`).then((res) => res.data);
}

export function createApplication(data: unknown) {
  return apiClient.post("/job-applications", { data }).then((res) => res.data);
}

