// components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useEffect, useRef } from "react";

export default function PrivateRoute({ children }) {
  const isVerified = localStorage.getItem("isRegister") === "true";
  const { enqueueSnackbar } = useSnackbar();
  const notified = useRef(false);

  useEffect(() => {
    if (!isVerified && !notified.current) {
      enqueueSnackbar("Você não tem acesso a esta página.", {
        variant: "error",
        anchorOrigin: { horizontal: "center", vertical: "top" },
      });
      notified.current = true;
    }
  }, [isVerified, enqueueSnackbar]);

  return isVerified ? children : <Navigate to="/login" replace />;
}
