import {Box, Button, CircularProgress} from "@mui/material";
import BookGrid from "../../components/books/BookGrid/BookGrid";
import useBooks from "../../../hooks/useBooks";
import {useState} from "react";
import AddBookDialog from "../../components/books/AddBookDialog/AddBookDialog";

const BooksPage = () => {
    const {books, loading, onDelete, onAdd, onEdit} = useBooks();
    const [addBookDialogOpen,setAddBookDialogOpen] = useState(false)
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
                            <Button variant="contained" color="primary" onClick={() => setAddBookDialogOpen(true)}>
                                Add Book
                            </Button>
                        </Box>
                        <BookGrid books={books} onDelete = {onDelete} onEdit = {onEdit}/>
                    </>
                }
            </Box>
            <AddBookDialog
                open={addBookDialogOpen}
                onClose={() => setAddBookDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default BooksPage