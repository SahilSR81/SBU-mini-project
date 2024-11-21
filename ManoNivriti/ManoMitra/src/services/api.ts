import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Replace with your actual API base URL

export const signUp = async (userData) => {
  const response = await axios.post(`${API_BASE_URL}/users/`, userData);
  return response.data;
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/token`, { username: email, password });
  return response.data;
};

export const fetchQuote = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/quote`);
  return response.data;
};

export const fetchYogaPose = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/yoga`);
  return response.data;
};

export const fetchMeditation = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/meditation`);
  return response.data;
};

export const fetchMusic = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/music`);
  return response.data;
};

export const fetchGame = async () => {
  const response = await axios.get(`${API_BASE_URL}/content/game`);
  return response.data;
};

