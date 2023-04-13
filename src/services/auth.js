import api from './api.js';

export async function signUpCustomers(data) {
    return await api.post(`auth/users/sign-up`, data);
}

export async function signUpProfessionals(data) {
  return await api.post(`auth/professionals/sign-up`, data);
}

export async function signInCustomers(data) {
    return await api.post(`auth/users/sign-in`, data);
}

export async function signInProfessionals(data) {
  return await api.post(`auth/professionals/sign-in`, data);
}
