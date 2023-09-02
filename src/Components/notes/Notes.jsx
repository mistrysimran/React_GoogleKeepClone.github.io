import { useContext } from "react";

//MUI
import { Box, Grid } from "@mui/material"
import { styled } from "@mui/material/styles";

//Drag and drop
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

//Components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Notes = () => {

    const { notes, setNotes } = useContext(DataContext);

    const onDragEnd = (result) => {

        if (!result.destination) {
            return;
        }

        const items = reorder(
            notes,
            result.source.index,
            result.destination.index
        );

        setNotes(items);
    }

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Form />
                {
                    notes.length > 0
                        ?
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable" direction="horizontal">
                                {(provided, snapshot) => (
                                    <Grid container style={{ marginTop: 30 }}
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {
                                            notes.map((note, index) => (
                                                <Draggable key={note.id} draggableId={note.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Grid item
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Note note={note} />
                                                        </Grid>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                    </Grid>
                                )}
                            </Droppable>
                        </DragDropContext>
                        : <EmptyNotes />
                }
            </Box>
        </Box>
    )
}

export default Notes
