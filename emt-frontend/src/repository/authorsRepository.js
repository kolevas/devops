import axiosInstance from "../axios/axios.js";

const authorsRepository = {
    findAll: async () => {
        return await axiosInstance.get("/authors");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/authors/${id}`);
    },
    delete: async (id) => {
        return await axiosInstance.post(`/authors/delete/${id}`);
    },
    add: async ( data) =>{
        return await axiosInstance.post("/authors/add", data)
    },
    edit: async (id, data) =>{
        return await axiosInstance.post(`/authors/edit/${id}`, data)
    },
};

export default authorsRepository;
