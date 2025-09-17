import { apiClient } from './apiService';


export function getOpenings() {
  return apiClient.get("/job-openings?createdAt:desc&&populate=*").then((res) => res.data);
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

export function getOpeningBySlug(slug: string) {
  return apiClient.get(`/job-openings?filters[slug][$eq]=${slug}&populate=*`).then((res) => {
    return res.data.data[0];
  });
}

export function getCareersBenifits() {
  return apiClient.get("/careers-benefits?createdAt:desc&&populate=*").then((res) => res.data);
}

export function getCareersCulture() {
  return apiClient.get("/career-cultures?createdAt:desc&&populate=*").then((res) => res.data);
}
