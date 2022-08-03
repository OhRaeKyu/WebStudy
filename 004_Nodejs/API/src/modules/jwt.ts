import jwt from 'jsonwebtoken';
import randToken from 'rand-token';
import { secret } from '../../config/secretKey';

const { secretKey, options } = secret;
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

interface SignProps {
  id: number;
  email: string;
}

export const newToken = {
  sign: async (userData: SignProps) => {
    const payload = {
      id: userData.id,
      email: userData.email,
    };

    const result = {
      token: jwt.sign(payload, secretKey, options),
      refreshToken: randToken.uid(256),
    };

    return result;
  },
  verify: async (userToken: string) => {
    try {
      return jwt.verify(userToken, secretKey);
    } catch (err: any) {
      if (err.message === 'jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else if (err.message === 'invalid token') {
        console.log('invalid token');
        console.log(TOKEN_INVALID);
        return TOKEN_INVALID;
      } else {
        console.log('invalid token');
        return TOKEN_INVALID;
      }
    }
  },
};
