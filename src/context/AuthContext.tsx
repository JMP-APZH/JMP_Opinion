import { IcontextType } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react'

export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
};

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {},
    checkAuthUser: async () => false as boolean,
}

const AuthContext = createContext<IcontextType>(INITIAL_STATE)

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext


// +41 76 759 39 75 - peter
// +41 51 282 15 97 - matze
// 076 503 66 05 - Gregory