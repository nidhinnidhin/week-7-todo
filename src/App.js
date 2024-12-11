import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Footer from "./components/footer";

const TodoApp = () => {
  // States
  const [todos, setTodos] = useState([]); 
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false); 
  const [editIndex, setEditIndex] = useState(null); 
  const [deleteIndex, setDeleteIndex] = useState(null); 
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false); 

  // Handle add todo
  const handleAddTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  // Handle edit todo
  const handleEditTodo = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setTodo(todos[index]);
  };

  // Save updated todo
  const handleSaveTodo = () => {
    if (todo){
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditIndex(null);
      setTodo("");
      alert("Todo edited successfully!"); 
    }
  };

  // Open modal
  const handleDeleteDialogOpen = (index) => {
    setDeleteIndex(index);
    setOpenDeleteDialog(true);
  };

  // close modal
  const handleDeleteDialogClose = () => {
    setOpenDeleteDialog(false);
    setDeleteIndex(null);
  };

  // Handling delete todo
  const handleDeleteTodo = () => {
    const updatedTodos = todos.filter((todo, index) => index !== deleteIndex);
    setTodos(updatedTodos)
    setOpenDeleteDialog(false);
    setDeleteIndex(null);
  };

  return (
    <>
    <Box
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 2,
        borderRadius: 2,
        bgcolor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Todo App
      </Typography>

      <Box display="flex" gap={1} mb={2}>
        <TextField
          fullWidth
          label={isEditing ? "Edit task" : "Enter a task"}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={isEditing ? handleSaveTodo : handleAddTodo}
        >
          {isEditing ? "Save" : "Add"}
        </Button>
      </Box>

      <List>
        {/* Rendering todos */}
        {todos.map((task, index) => (
          <ListItem
            key={index}
            sx={{
              bgcolor: "#fff",
              mb: 1,
              borderRadius: 1,
              boxShadow: 1,
            }}
            secondaryAction={
              <>
                <IconButton
                  onClick={() => handleEditTodo(index)}
                  color="primary"
                >
                  <Edit />
                </IconButton>
                <IconButton
                  onClick={() => handleDeleteDialogOpen(index)}
                  color="error"
                >
                  <Delete />
                </IconButton>
              </> 
            }
          >
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>

        {/* Modal for delete confirmation */}
      <Dialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose} color="secondary">
            No
          </Button>
          <Button onClick={handleDeleteTodo} color="error" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    <Footer/>
    </>
  );
};

export default TodoApp;
