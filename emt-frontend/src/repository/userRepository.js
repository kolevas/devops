import axiosInstance from "../axios/axios.js";

const userRepository = {
    login: async (username, password) => {
        try {
            const response = await axiosInstance.post("/user/login", {
                username,
                password,
            });

            const { token } = response.data;
            console.log(response.data)
            localStorage.setItem("jwtToken", token);
        } catch (error) {
            console.error("Login failed:", error);
        }
    },

    register: async (username, password, email) => {
        try {
            const response = await axiosInstance.post("/user/register", {
                username,
                password,
                email,
            });

            console.log("Registration successful:", response.data);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    },

    logout: () => {
        localStorage.removeItem("jwtToken");
        console.log("User logged out");
    },
};

export default userRepository;
