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
import { decreaseQuantity, increaseQuantity } from "../../store/cart/cartSlice";

const DrawerCart = ({ openCart, setOpenCart }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  return (
    <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
      <Box p={2}>
        <Typography variant="h5">Shopping Cart</Typography>
        <List>
          {console.log("cart ??????", cart)}
          {cart?.map((item) => {
            return (
              <ListItem key={item._id}>
                <ListItemText
                  primary={item.title}
                  secondary={`$${item.price.toFixed(2)}`}
                />
                
                <Button onClick={() => handleDecreaseQuantity(item)}>
                  -
                </Button>
                {item.count}
                <Button onClick={() => handleIncreaseQuantity(item)}>
                  +
                </Button>
                <Typography>
                  ${item.totalPrice.toFixed(2)}
                </Typography>
              </ListItem>
            );
          })}
        </List>
        <Typography variant="h6">
          Total: $
          {cart
            .reduce((total, item) => total + item.price * item.count, 0)
            .toFixed(2)}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default DrawerCart;
