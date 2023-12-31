import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {

  const isAuthenticated = false;

  return (
    <>
    {isAuthenticated ? (
      <Navigate to='/' />
    ) : (
      <>
        <section>
          <Outlet />
        </section>
      </>
    )
  }
      <div>AuthLayout</div>

    </>
    
  )
}

export default AuthLayout