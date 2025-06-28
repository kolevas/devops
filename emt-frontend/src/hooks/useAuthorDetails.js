import {useEffect, useState} from "react";
import authorsRepository from "../repository/authorsRepository";
import countriesRepository from "../repository/countriesRepository";

const useAuthorDetails = (id) => {
    const [state, setState] = useState({
        "author": null,
        "country": null,
    });

    useEffect(() => {
        authorsRepository
            .findById(id)
            .then((response) => {
                setState(prevState => ({...prevState, "author": response.data}));
                countriesRepository
                    .findById(response.data.country.id)
                    .then((response) => {
                        setState(prevState => ({...prevState, "country": response.data}));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useAuthorDetails;
