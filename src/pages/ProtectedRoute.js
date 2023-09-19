import { Navigate } from "react-router-dom";

function ProtectedRoute({ signedIn, redirect, children }) {
  if (!signedIn){
    return <Navigate to={redirect} replace />
  }
  return children;
}

export default ProtectedRoute;
