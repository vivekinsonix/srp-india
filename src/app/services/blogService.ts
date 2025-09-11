import { apiClient } from './apiService';

export function getBlogs() {
  return apiClient.get('/blogs?populate=Seo&&populate=coverImage').then((res) => res.data);
}

export function getPaginatedBlogs(pageno = 1, records = 5) {
  return apiClient.get(`/blogs?populate=Seo&&populate=coverImage&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res) => res.data);
}

export function getBlog(id: string | number) {
  return apiClient.get(`/blogs/${id}?populate=*`).then((res) => res.data);
}
