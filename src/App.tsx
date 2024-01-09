import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'

import { Toaster } from "@/components/ui/toaster"
import './globals.css'


const App = () => {
  return (
    <main className='flex h-screen'>

        <Routes>
            {/* {public routes} */}
            <Route element={<AuthLayout />}>
                <Route path='/sign-up' element={<SignupForm />} />
                <Route path='/sign-in' element={<SigninForm />} />
            </Route>

            {/* {private routes} */}
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/all-users' element={<AllUsers />} />
                <Route path='/create-post' element={<CreatePost />} />
                <Route path='/update-post/:id' element={<EditPost />} />
                <Route path='/posts/:id' element={<PostDetails />} />
                <Route path='/profile/:id/*' element={<Profile />} />
                <Route path='/update-profile/:id' element={<UpdateProfile />} />
                



            </Route>

            {/* <div>
                
                App of JMP

                <h1 className="text-3xl text-red-500 font-bold underline">
                    Hello JMP's App
                </h1>

            </div> */}
        </Routes>

        <Toaster />

    </main>
    
  )
}

export default App