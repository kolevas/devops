import React from 'react';
import {useNavigate, useParams} from "react-router";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Typography,
    Paper,
    Stack,
    Breadcrumbs,
    Link
} from "@mui/material";
import {
    ArrowBack,
    Share
} from "@mui/icons-material";
import useCountryDetails from "../../../../hooks/useCountryDetails";

const CountryDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {country} = useCountryDetails(id);

    if (!country) {
        return (
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh'}}>
                <CircularProgress/>
            </Box>
        );
    }

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" sx={{mb: 3}}>
                <Link
                    underline="hover"
                    color="inherit"
                    component={RouterLink}
                    to="/countries"
                >
                    Countries
                </Link>
                <Typography color="text.primary">{country.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4, mt: 5}}>
                <Grid container spacing={4}>

                    <Grid item xs={12} md={9}>
                        <Box sx={{mb: 3}}>
                            <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                {country.name}
                            </Typography>
                            <Typography variant="h5" gutterBottom >
                                {country.continent}
                            </Typography>

                            <Typography variant="h6" gutterBottom >
                                Details:
                            </Typography>


                            <Typography variant="body1" sx={{mb: 3}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequatur culpa
                                doloribus, enim maiores possimus similique totam ut veniam voluptatibus. Adipisci
                                consequatur, cum dolorem eaque enim explicabo fugit harum, id laborum non totam ut!
                                Architecto assumenda deserunt doloribus ducimus labore magnam officiis sunt. Autem culpa
                                eaque obcaecati quasi, quo vitae.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="space-between">
                        <Stack direction="row" spacing={2}>
                            <Button
                                variant="outlined"
                                startIcon={<Share/>}
                            >
                                Share
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<ArrowBack/>}
                                onClick={() => navigate("/countries")}
                            >
                                Back to Countries
                            </Button>
                        </Stack>

                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default CountryDetails;
