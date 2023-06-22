import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const RequireAuth = () => {
    const { auth } = useAuthContext();
    const location = useLocation();

    return (
        auth?.user
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;