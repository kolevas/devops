import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import DeleteAuthorDialog from "../DeleteAuthorDialog/DeleteAuthorDialog";
import EditAuthorDialog from "../EditAuthorDialog/EditAuthorDialog";


const AuthorCard = ({author, onDelete, onEdit}) => {
    const navigate = useNavigate();
    const [deleteAuthorDialogOpen, setDeleteAuthorDialogOpen] = useState(false);
    const [editAuthorDialogOpen, setEditAuthorDialogOpen] = useState(false)
    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h3">{author.name}</Typography>
                    <Typography variant="h3">{author.surname}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button size="small" color="info" startIcon={<InfoIcon/>} onClick={() => navigate(`/authors/${author.id}`)}>Info</Button>
                    <Box>
                        <Button size="small" color="warning" startIcon={<EditIcon/>} sx={{mr: "0.25rem"}} onClick={() => setEditAuthorDialogOpen(true)}>Edit</Button>
                        <Button size="small" color="error" startIcon={<DeleteIcon/>} onClick={() => setDeleteAuthorDialogOpen(true)}>Delete</Button>
                    </Box>
                </CardActions>
            </Card>
            <DeleteAuthorDialog
                open={deleteAuthorDialogOpen}
                onClose={() => setDeleteAuthorDialogOpen(false)}
                author={author}
                onDelete={onDelete}
            />
            <EditAuthorDialog
                open={editAuthorDialogOpen}
                onClose={() => setEditAuthorDialogOpen(false)}
                author={author}
                onEdit={onEdit}
            />
        </>

);
};

export default AuthorCard;
