import { getCurrentUser } from '@/lib/appwrite/api';
import { IUser, IcontextType } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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

const AuthProvider = ({ children} : { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    const checkAuthUser = async () => {
        try {
            const currentAccount = await getCurrentUser();

            if(currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                })
            
                setIsAuthenticated(true);
    
                return true
            }

            return false

            // ==> Destructured version
            // const { $id, name, username, email, imageUrl, bio, } = await getCurrentUser();

            // if(currentAccount) {
            //     setUser({
            //         id: $id,
            //         name,
            //         username,
            //         imageUrl,
            //         bio,
            //     })}

                
        } catch (error) {
            console.log(error)
            return false;
        } finally {
           setIsLoading(false)     
        }
    };

    // We have to call this fonction everytime we reload the page therefroe:
    useEffect(() => {
      if(
        localStorage.getItem('cookieFallback') === '[]' || 
        localStorage.getItem('cookieFallback') === null
      ) navigate('/sign-in')

      checkAuthUser()
    }, [navigate]);
    

    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    }

  return (
    <AuthContext.Provider value={value}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(AuthContext);

// +41 76 759 39 75 - peter
// +41 51 282 15 97 - matze
// 076 503 66 05 - Gregory