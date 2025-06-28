import {useEffect, useState} from "react";
import countriesRepository from "../repository/countriesRepository";

const useCountryDetails = (id) => {
    const [state, setState] = useState({
        "country": null,
    });
    useEffect(() => {
        countriesRepository
            .findById(id)
            .then((response) => {
                setState(prevState => ({...prevState, "country": response.data}));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useCountryDetails;
