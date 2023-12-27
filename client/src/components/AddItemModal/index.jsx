import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { AddNewProduct } from "../../store/shop/api_actions";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import styled from "styled-components";

const initialValues = {
  title: undefined,
  price: undefined,
  desc: undefined,
  image: undefined,
  isOnSale: false,
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddItemModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("handleSubmit>>>", values);
    dispatch(AddNewProduct(values));
    handleClose();
  };

  return (
    <StyledWrapper>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }} className="modal-content">
          <Typography variant="h4">Add New Product</Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleChange, values }) => (
              <Form>
                <TextField
                  label="Title"
                  type="text"
                  id="title"
                  name="title"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.title}
                />
                <ErrorMessage name="title" component="div" />

                <TextField
                  label="Price"
                  type="number"
                  id="price"
                  name="price"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.price}
                />
                <ErrorMessage name="price" component="div" />

                <TextField
                  label="Description"
                  id="desc"
                  name="desc"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.desc}
                />
                <ErrorMessage name="desc" component="div" />

                <TextField
                  label="Image URL"
                  type="text"
                  id="image"
                  name="image"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  value={values.image}
                />
                <ErrorMessage name="image" component="div" />

                <FormControlLabel
                  control={<Checkbox name="isOnSale" color="primary" />}
                  label="On Sale"
                />

                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AddItemModal;
