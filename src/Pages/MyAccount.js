import { useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";
import { useEffect } from "react";

export default function MyAccount() {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("loggedInUser");
        navigate("/");
    }

    return (
        <>
            <Navbar />
            <button
          className="custom-button"
          onClick={logout}
        >
          Logout
        </button>
        </>
    )
}

