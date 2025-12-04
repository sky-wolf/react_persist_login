import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { auth, setAuth } = useAuth();
    

    const refresh = async () => {
        const response = await axios.post('http://localhost:5119/api/account/token/refresh', 
            JSON.stringify({ token: auth?.refreshToken }));
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.token);
            return { ...prev, accessToken: response.data.token }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;