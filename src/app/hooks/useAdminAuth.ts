import request from 'services/axiosInstance';
import SignIn from 'app/auth/sign-in/page';
import { adminSignin, API_METHODS } from 'services/apis';

const useAdminAuth = () => {
  const signIn = async (email: string, password: string) => {
    try {
      const response = await request({
        method: API_METHODS.POST,
        url: adminSignin,
        data: {
          email: email,
          password: password,
        },
      });

      if (response.data.statusCode) return true;
    } catch (error: any) {
      return false;
    }
  };

  return { signIn };
};

export default useAdminAuth;
