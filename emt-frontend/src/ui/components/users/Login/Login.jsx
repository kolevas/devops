import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useAuth } from "../../../../context/AuthContext";
import { useLocation } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { login } = useAuth();
    const location = useLocation();
    const errorMessage = location.state?.errorMessage || "";


    const validate = () => {
        const newErrors = {};

        if (!username.trim()) {
            newErrors.username = "Username is required";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 2) {
            newErrors.password = "Password must be at least 2 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = () => {
        if (validate()) {
            login(username, password);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
                backgroundColor: "#f0f0f0",
            }}
        >
            <Paper sx={{ padding: 4, width: 400, boxShadow: 2 }}>
                <Typography variant="h4" mb={2} textAlign="center">
                    Login
                </Typography>
                <Typography variant="h6" mb={2} textAlign="center" color={"error"}>
                    {errorMessage}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleLogin} fullWidth>
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
