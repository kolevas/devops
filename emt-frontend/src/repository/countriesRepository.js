import axiosInstance from "../axios/axios.js";

const countriesRepository = {
    findAll: async () => {
        return await axiosInstance.get("/countries");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/countries/${id}`);
    },
    delete: async (id) => {
        return await axiosInstance.post(`/countries/delete/${id}`);
    },
    add: async ( data) =>{
        return await axiosInstance.post("/countries/add", data)
    },
    edit: async (id, data) =>{
        return await axiosInstance.post(`/countries/edit/${id}`, data)
    },
};

export default countriesRepository;
