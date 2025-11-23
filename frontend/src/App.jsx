import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./screens/Login";
import SignupPage from "./screens/Signup";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'
import Player from "./screens/Player/Player";
import { ToastContainer,toast } from "react-toastify";
import Guest from "./screens/Guest";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <SignupPage />
}
function App() {


  return (
    <div>
      <ToastContainer theme="dark" />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          <Route
            path="/login"
            element={<LoginPage />} />
          <Route
            path="/signup"
            element={<RegisterAndLogout />} />
          <Route
            path="/logout"
            element={<Logout />} />
          <Route
            path="/player/:id"
            element={<Player />} />
          <Route
            path="*"
            element={<NotFound />} />
          <Route
          path="/guest"
          element={<Guest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
