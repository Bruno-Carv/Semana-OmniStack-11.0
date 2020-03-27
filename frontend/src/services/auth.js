export const isAuthenticated = () => sessionStorage.getItem('ongId') !== null;
export const getToken = () => sessionStorage.getItem('ongId');

export const login = token => sessionStorage.setItem('ongId',token);
export const logout = () => sessionStorage.removeItem('ongId');