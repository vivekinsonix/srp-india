// src/services/eventService.ts
import { apiClient } from './apiService';

export function getEvents() {
  return apiClient.get('/events?populate=Seo&&populate=gallery').then((res) => res.data);
}

export function getEvent(id: string | number) {
  return apiClient.get(`/events/${id}?populate=*`).then((res) => res.data);
}

export function getPaginatedEvent(pageno = 1, records = 5) {
  return apiClient.get(`/events?&&populate=*&sort=createdAt:desc&pagination[page]=${pageno}&pagination[pageSize]=${records}`).then((res) => res.data);
}

export function getEventBySlug(slug: string) {
  return apiClient.get(`/events?filters[slug][$eq]=${slug}&populate=*`).then((res) => {
    return res.data.data[0];
  });
}
