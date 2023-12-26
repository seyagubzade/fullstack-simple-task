import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./components/CardList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { GetAllData } from "./store/shop/api_actions";

function App() {
  const [data, setData] = useState([])
  const dispatch = useDispatch()
  const { product, loading, error } = useSelector((state) => state.product);
  const getAll = async()=>{
    dispatch(GetAllData())
  }

  useEffect(()=>{
    getAll()
  }, [])

  useEffect(()=>{
    console.log("App.js",product)
  }, [product])
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {loading ? <p>Loading</p> : product ? <CardList data={product} /> : error ? <p>Not found</p> : null}
    </div>
  );
}

export default App;
