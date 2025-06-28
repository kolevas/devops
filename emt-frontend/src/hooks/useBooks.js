import {useCallback, useEffect, useState} from "react";
import booksRepository from "../repository/booksRepository";

const initialState = {
    "books": [],
    "loading": true,
};

const useBooks = () => {
    const [state, setState] = useState(initialState);

    const fetchBooks = useCallback(() => {
        booksRepository
            .findAll()
            .then((response) => {
                response.data.forEach(book=>{
                })
                setState({
                    "books": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onDelete = useCallback((id) => {
        booksRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the book with ID ${id}.`);
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onAdd = useCallback((data) => {
        booksRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new book.");
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    const onEdit = useCallback((id, data) => {
        booksRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the book with ID ${id}.`);
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete}
    // return {...state, onDelete: onDelete}
};

export default useBooks