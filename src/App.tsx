import './globals.css'
import { Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './_root/pages'


const App = () => {
  return (
    <main className='flex h-screen'>

        <Routes>
            {/* {public routes} */}
            <Route path='/sign-in' element={<SigninForm />} />


            {/* {private routes} */}
            <Route index element={<Home />} />

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