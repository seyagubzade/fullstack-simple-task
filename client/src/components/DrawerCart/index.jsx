// DrawerCart.js
import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../store/shop/shopSlice";

const DrawerCart = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.product.cartItems);

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box p={2}>
        <Typography variant="h5">Shopping Cart</Typography>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={`$${item.price.toFixed(2)}`} />
              <Button onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
              {item.quantity}
              <Button onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
              <Typography>${(item.price * item.quantity).toFixed(2)}</Typography>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6">
          Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default DrawerCart;
