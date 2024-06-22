import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const useAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cookies.get('loggedin') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);
};

export default useAuth;
