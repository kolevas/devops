import axiosInstance from "../axios/axios.js";

const booksRepository = {
    findAll: async () => {
        return await axiosInstance.get("/books");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/books/${id}`);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/books/delete/${id}`);
    },
    add: async ( data) =>{
        return await axiosInstance.post("/books/add", data)
    },
    edit: async (id, data) =>{
        return await axiosInstance.put(`/books/edit/${id}`, data)
    },
    categories:  async () => {
        return await axiosInstance.get("/books/categories");
    },
};

export default booksRepository;
