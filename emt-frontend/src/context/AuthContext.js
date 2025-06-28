// AuthContext.js
import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userRepository from "../repository/userRepository";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const checkAuth = useCallback(() => {
        const token = localStorage.getItem("jwtToken");
        if (!token) {
            setLoggedInUser(null);
            return;
        }
        try {
            const user = JSON.parse(atob(token.split(".")[1]));
            setLoggedInUser(user);
        } catch {
            setLoggedInUser(null);
        }
    }, []);

    useEffect(() => {
        checkAuth();

        const handleStorageChange = (event) => {
            if (event.key === "jwtToken") {
                checkAuth();
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [checkAuth]);

    const login = useCallback(async (username, password) => {
        try {
            await userRepository.login(username, password);
            checkAuth();
            const token = localStorage.getItem("jwtToken");

            if(!token)
                navigate("/user/login", {
                    state: { errorMessage: "Invalid username or password" },
                    replace: true
                });
            else
                navigate("/", { replace: true });
        } catch (error) {
            console.error("Login failed:", error);
        }
    }, [navigate, checkAuth]);

    const logout = useCallback(() => {
        localStorage.removeItem("jwtToken");
        checkAuth();
        navigate("/user/login", { replace: true });
    }, [navigate, checkAuth]);

    return (
        <AuthContext.Provider value={{ loggedInUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
