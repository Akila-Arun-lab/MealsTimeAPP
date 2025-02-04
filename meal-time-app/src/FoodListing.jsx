import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Header from "./Header";

var data = require('./dishes.json');

function FoodListing() {
  function increment(prevCount){
    setCount(function () {
      return (prevCount += 1);
    });
  }
  
  function decrement(prevCount){
    setCount(function () {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  function addToCart(item){
    if(item.quantity === 0){
      return;
    }
    console.log(item);
    cart.push(item);
    console.log(cart);
  }
  const [products, setProducts] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  
  useEffect(() => {

    async function getProducts(){
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setIsLoading(false);
    }
    //getProducts();
  }, []);
  
  if(isLoading){
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>{error}</h1>;
  }
  return (
    <div class="container p-0">
      <div class="row justify-content-center">
        {products.map((product) => (
            <div class="card mb-3 mt-3 me-3" style={{"max-width":"320px"}}>
              <div class="row g-0">
                <div class="col-md-4 mt-3">
                  <img src={product.img} class="img-fluid rounded-start" alt={product.name} style={{width: "150px", height: "150px"}}/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Price: Rs.{product.price}</p>
                    <p class="card-text">Category: <i>{product.category}</i></p>
                    <div class="d-flex p-2">
                        <button onClick={(e) => decrement(product.quantity--)} style={{"background-color": "#006D5B", "color": "#ffff", "width": "30px", "height": "30px"}}>-</button>
                        <p class="card-text me-2 ms-2">{product.quantity}</p>
                        <button onClick={(e) => increment(product.quantity++)} style={{"background-color": "#006D5B", "color": "#ffff", "width": "30px", "height": "30px"}}>+</button>
                    </div>
                    <a href="#" onClick={(e) => {addToCart(product)}} class="btn btn-primary" style={{"background-color": "#006D5B"}}>Add to Cart</a>   
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}
export default FoodListing;
