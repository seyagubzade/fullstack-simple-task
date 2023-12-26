import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./components/CardList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GetAllData } from "./store/shop/api_actions";
import AddItemModal from "./components/AddItemModal";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(GetAllData());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar handleOpen={handleOpen} />
      <Hero />
      {loading ? (
        <p>Loading</p>
      ) : product ? (
        <CardList data={product} />
      ) : error ? (
        <p>Not found</p>
      ) : null}

      <AddItemModal open={open} setOpen={setOpen} handleClose={handleClose}/>
      {/* <DrawerCart /> */}
    </div>
  );
}

export default App;
