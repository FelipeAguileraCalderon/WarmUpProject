import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import Home from './routes/Home';
import { Login } from './routes/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';

const styles = {
  h1: {
    color: 'white',
    marginLeft: '10px'
  }
}

export default function App () {

  return(
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home'/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route path='*' element={<h1 style={styles.h1}>404 Page Not Found</h1>}/>
      </Routes>
    </AuthProvider>      
  )
}