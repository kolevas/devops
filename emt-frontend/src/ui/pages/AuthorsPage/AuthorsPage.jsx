import {Box, Button, CircularProgress} from "@mui/material";
import AuthorGrid from "../../components/authors/AuthorGrid/AuthorGrid";
import useAuthors from "../../../hooks/useAuthors";
import {useState} from "react";
import AddAuthorDialog from "../../components/authors/AddAuthorDialog/AddAuthorDialog";

const AuthorsPage = () => {
    const {authors, loading, onDelete, onAdd, onEdit} = useAuthors();
    const [addAuthorDialogOpen,setAddAuthorDialogOpen] = useState(false)

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
                            <Button variant="contained" color="primary" onClick={() => setAddAuthorDialogOpen(true)}>
                                Add Author
                            </Button>
                        </Box>
                        <AuthorGrid authors={authors} onDelete = {onDelete} onEdit = {onEdit}/>
                    </>
                   }
            </Box>

            <AddAuthorDialog
                open={addAuthorDialogOpen}
                onClose={() => setAddAuthorDialogOpen(false)}
                onAdd={onAdd}
            />
        </>

    );
};

export default AuthorsPage