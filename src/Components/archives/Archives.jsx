import { useContext } from "react";
//MUI
import { Box, Grid } from "@mui/material"
import { styled } from "@mui/material/styles";

//components
import Archive from './Archive';

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Archives = () => {

    const { archiveNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        archiveNotes.map(archive => (
                            <Grid item key={archive.id}>
                                <Archive note={archive} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Archives;
