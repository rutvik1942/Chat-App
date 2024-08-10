import './App.css';
import Form from './modules/Forms';
import Dashboard from './modules/Dashboard';
import { Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user:tocken') !== null || true;

  if(!isLoggedIn) {
    return <Navigate to={'users/sign_in'} />
  }else if(isLoggedIn && ['/users/sign_up', '/users/sign_in'].includes(window.location.pathname)){
    return <Navigate to={'/'} />
  }
  return children
}

function App() {

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      
      <Route path='users/sign_in' element={
        <ProtectedRoute>
          <Form isSignInPage={true}/>
        </ProtectedRoute>
        } />
      <Route path='users/sign_up' element={
        <ProtectedRoute>
          <Form isSignInPage={false}/>
        </ProtectedRoute>
        } />
    </Routes>
  );
} 

export default App;
