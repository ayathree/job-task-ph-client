// src/api.js

const API_BASE_URL = 'http://localhost:5000';

const getToken = () => localStorage.getItem('token');

const request = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Network response was not ok');
  }

  const data = await response.json();
  return data;
};

export const getUserInfo = () => request('/user-info');
