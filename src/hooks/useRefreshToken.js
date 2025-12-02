import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    //const { auth } = useAuth();

    const refresh = async () => {
        const response = await axios.post('/api/account/refresh', 
            JSON.stringify({ token: auth?.refreshToken }));
        setAuth(prev => {
            // console.log(JSON.stringify(prev));
            // console.log(response.data.token);
            return { ...prev, accessToken: response.data.token }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;