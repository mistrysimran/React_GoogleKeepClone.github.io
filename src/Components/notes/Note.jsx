import { useContext } from "react";

import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles'
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Trash } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";

const StyleCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Note = ({ note }) => {

    const { notes, setNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    return (
        // <Box>
        //     <h1>Note</h1>
        // </Box>
        <StyleCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>

            <CardActions>
                <Archive
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => archiveNote(note)}
                />
                <Trash
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyleCard>
    )
}

export default Note;
