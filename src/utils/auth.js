import Cookies from 'js-cookie';

export const login = () => {
    Cookies.set('loggedin', 'true');
};

export const logout = () => {
    Cookies.remove('loggedin');
};

export const isLoggedIn = () => {
    return Cookies.get('loggedin') === 'true';
};


