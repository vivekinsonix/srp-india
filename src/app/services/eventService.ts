// src/services/eventService.ts
import { apiClient } from './apiService';

export function getEvents() {
  return apiClient.get("/events?populate=Seo&&populate=gallery").then((res) => res.data);
}

export function getEvent(id: string | number) {
  return apiClient.get(`/events/${id}?populate=*`).then((res) => res.data);
}

export function createEvent(data: unknown) {
  return apiClient.post("/events", { data }).then((res) => res.data);
}

export function updateEvent(id: string | number, data: unknown) {
  return apiClient.put(`/events/${id}`, { data }).then((res) => res.data);
}

export function deleteEvent(id: string | number) {
  return apiClient.delete(`/events/${id}`).then((res) => res.data);
}
