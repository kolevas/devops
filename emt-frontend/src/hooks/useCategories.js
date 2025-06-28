import {useEffect, useState} from "react";
import booksRepository from "../repository/booksRepository";


const initialState = {
    "categories": []
};

const useCategories = ()=>{
    const [state, setState] = useState(initialState);
    useEffect(() => {
        booksRepository
            .categories()
            .then((response) => {
                // console.log(response.data)
                setState({
                    "categories": response.data,
                });

            })
            .catch((error) => console.log(error));
    }, []);

    return state;
}

export default useCategories