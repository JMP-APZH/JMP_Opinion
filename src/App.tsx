import { Routes, Route } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { Home } from './_root/pages'

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
            </Route>

            {/* <div>
                
                App of JMP

                <h1 className="text-3xl text-red-500 font-bold underline">
                    Hello JMP's App
                </h1>

            </div> */}
        </Routes>

    </main>
    
  )
}

export default App