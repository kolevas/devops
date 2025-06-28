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
    ArrowBack, FavoriteBorder,
    Share
} from "@mui/icons-material";
import useBookDetails from "../../../../hooks/useBookDetails";

const BookDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {book, author, country} = useBookDetails(id);

    if (!book || !author || !country) {
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
                    to="/books"
                >
                    Books
                </Link>
                <Typography color="text.primary">{book.name}</Typography>
            </Breadcrumbs>

            <Paper elevation={2} sx={{p: 4, borderRadius: 4, mt: 5}}>
                <Grid container spacing={4}>

                    <Grid item xs={12} md={9}>
                        <Box sx={{mb: 3}}>
                            <Typography variant="h3" gutterBottom sx={{fontWeight: 600}}>
                                {book.name}
                            </Typography>

                            <Typography variant="h4" color="primary.main" fontWeight="bold" sx={{mb: 2}}>
                                {book.category}
                            </Typography>
                            <Typography variant="h5" sx={{mb: 2}}>
                                Author: {author.name} {author.surname}, from {country.name}({country.continent})
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
                                color="secondary"
                                startIcon={<FavoriteBorder/>}
                            >
                                Add to Wishlist
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={<ArrowBack/>}
                                onClick={() => navigate("/books")}
                            >
                                Back to Books
                            </Button>
                        </Stack>

                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default BookDetails;
