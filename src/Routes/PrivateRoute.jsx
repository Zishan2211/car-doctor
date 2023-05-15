import { useContext } from 'react';
import { AuthContex } from '../Provaider/AuthProvaider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContex)

    if (loding) {
        console.log('zishan_loding')
        return <progress className="progress w-56"></progress> 
    }

    if (user?.email) {
        return children;
    }

   return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;