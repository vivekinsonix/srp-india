import { apiClient } from './apiService';

export function getBlogs() {
  return apiClient.get('/blogs?populate=Seo&&populate=coverImage').then((res) => res.data);
}

export function getBlog(id: string | number) {
  return apiClient.get(`/blogs/${id}?populate=*`).then((res) => res.data);
}

export function createBlog(data: unknown) {
  return apiClient.post('/blogs', { data }).then((res) => res.data);
}

export function updateBlog(id: string | number, data: unknown) {
  return apiClient.put(`/blogs/${id}`, { data }).then((res) => res.data);
}

export function deleteBlog(id: string | number) {
  return apiClient.delete(`/blogs/${id}`).then((res) => res.data);
}
