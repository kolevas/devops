import {Box, Button, CircularProgress} from "@mui/material";
import CountryGrid from "../../components/countries/CountryGrid/CountryGrid";
import useCountries from "../../../hooks/useCountries";
import {useState} from "react";
import AddCountryDialog from "../../components/countries/AddCountryDialog/AddCountryDialog";

const CountryPage = () => {
    const {countries, loading, onDelete, onAdd, onEdit} = useCountries();
    const [addCountryDialogOpen, setAddCountryDialogOpen] = useState(false);

    return (
        <>
            <Box className="books-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddCountryDialogOpen(true)}>
                                Add Country
                            </Button>
                        </Box>

                        <CountryGrid countries={countries} onDelete={onDelete} onAdd = {onAdd} onEdit={onEdit}/>
                    </>
                }

            </Box>
            <AddCountryDialog
                open={addCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CountryPage