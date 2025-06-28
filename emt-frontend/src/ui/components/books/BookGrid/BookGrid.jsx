import {Grid} from "@mui/material";
import BookCard from "../BookCard/BookCard";

const BookGrid = ({books, onDelete, onEdit}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {books.map((book) => (
                <Grid key={book.Id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <BookCard book={book} onDelete = {onDelete} onEdit = {onEdit} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BookGrid