import { apiClient } from './apiService';

export function getBlogs() {
  return apiClient.get('/blogs?&&populate=*&sort=createdAt:desc').then((res) => res.data);
}

export function getPaginatedBlogs(pageno = 1, records = 5) {
  return apiClient.get(`/blogs?&&populate=*&sort=createdAt:desc&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res) => res.data);
}

export function getBlog(id: string | number) {
  return apiClient.get(`/blogs/${id}?populate=*`).then((res) => res.data);
}

export function getBlogBySlug(slug: string) {
  return apiClient.get(`/blogs?filters[slug][$eq]=${slug}&populate=*`).then((res) => {
    return res.data.data[0];
  });
}
