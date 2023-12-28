import './globals.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <main className='flex h-screen'>

        <Routes>
            {/* {public routes} */}

            {/* {private routes} */}

            <div>
                
                App of JMP

                <h1 className="text-3xl text-red-500 font-bold underline">
                    Hello JMP's App
                </h1>

            </div>
        </Routes>

    </main>
    
  )
}

export default App