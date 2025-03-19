import "./App.css";
import Card from "../components/Card.jsx";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-hot-toast";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";

function App() {
  const { authUser, isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
    toast('Good Job!', {
      icon: '👏',
    });
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex item-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
