import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI
import { Box } from "@mui/material"

//Components
import SwipeDrawer from "./SwipeDrawer"
import Notes from "./notes/Notes"
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archives/Archives";

const Home = () => {
    return (
        
        <Box style={{ display: 'flex', width: '100%' }}>
            <BrowserRouter>
                <SwipeDrawer />

                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/archive" element={<Archives />} />
                    <Route path="/trash" element={<DeleteNotes />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default Home;
