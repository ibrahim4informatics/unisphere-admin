import { DefaultAuthProvider } from 'adminjs';

import componentLoader from './component-loader.js';
import { DEFAULT_ADMIN } from './constants.js';
import argon2 from 'argon2';
import initializeDB from '../db/index.js';

const { prisma } = await initializeDB();

const verify = async (value: string, hash: string): Promise<boolean> => {
  try {
    const isVerified = await argon2.verify(hash, value);
    return isVerified;
  }

  catch (err) {
    console.log(`Argon2 Verify Error:${err}`)
    throw new Error("Can not verify password")
  }
}
const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {


    if (email && password) {

      const admin = await prisma.user.findUnique({
        where: { email },
        select: {
          role: true,
          password: true,
          id: true,
          avatar_url: true,
        }
      });

      if (!admin || admin.role !== 'ADMIN') {
        return null;
      }

      const isValid = await verify(password, admin.password);
      if (!isValid) {
        return null;
      }

      return {
        email,
        id: admin.id,
        avatar_url: admin.avatar_url,
      };
    }

    return null;
  },
});

export default provider;
