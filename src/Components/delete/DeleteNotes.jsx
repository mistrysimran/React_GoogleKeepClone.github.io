import { useContext } from "react";

//MUI
import { Box, Grid } from "@mui/material"
import { styled } from "@mui/material/styles";

//components
import DeleteNote from "./DeleteNote";

import { DataContext } from "../../context/DataProvider";


const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {

    const { deletedNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container >
                    {
                        deletedNotes.map(note => (
                            <Grid item>
                                <DeleteNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes;
