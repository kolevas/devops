import {useEffect, useState} from "react";
import countriesRepository from "../repository/countriesRepository";
import booksRepository from "../repository/booksRepository";
import authorsRepository from "../repository/authorsRepository";

const useBookDetails = (id) => {
    const [state, setState] = useState({
        "book" : null,
        "author": null,
        "country": null,
    });

    useEffect(() => {
        booksRepository
            .findById(id)
            .then((response) => {
                console.log(response.data)
                setState(prevState => ({...prevState, "book": response.data}));
                authorsRepository
                    .findById(response.data.author)
                    .then((response) => {
                        console.log(response.data)
                        setState(prevState => ({...prevState, "author": response.data}));
                        countriesRepository
                            .findById(response.data.country.id)
                            .then((response)=>
                            {
                                console.log(response.data)
                                setState(prevState => ({...prevState, "country" : response.data}));
                            })
                            .catch((error)=> console.log(error));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useBookDetails;
