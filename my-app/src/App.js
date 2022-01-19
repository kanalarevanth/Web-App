import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import data from './components/data'
import Home from './components/home';
import React, {useState} from 'react'

function App() {
  const {mens, womens} = data
  const [cartitems, setcartitems] = useState([]) // Adding Items to the cart

  // Adding items to Cart and if Item exists increasing the quantity
  const addtoCartItems = (items) =>{
    const IfItemsExist = cartitems.find((item) => item.id === items.id);
    if(IfItemsExist){
      setcartitems(cartitems.map((item) => item.id ===  items.id ? {...IfItemsExist, qty:IfItemsExist.qty + 1 } : item))
    }else{
      setcartitems([...cartitems, {...items, qty:1 }])
    }
  }

  
  // Decreasing the quantity of the item
  const decreaseqty =(items) =>{
    const IfItemsExist = cartitems.find((item) => item.id === items.id);
    if(IfItemsExist.qty === 1){
      setcartitems(cartitems.filter((item) =>item.id !== items.id))
    }else{
      setcartitems(cartitems.map((item) => item.id ===  items.id ? {...IfItemsExist, qty:IfItemsExist.qty - 1 } : item))
    }
  }

  // Item removing from the cart
  const RemoveItem = (items) =>{
    setcartitems(cartitems.filter((item) =>item.id !== items.id))
  }
  return (
    <div>
    <BrowserRouter>
      <Header cartitems={cartitems} addtoCartItems={addtoCartItems} decreaseqty={decreaseqty} RemoveItem={RemoveItem}/>
      <Home mens={mens} womens={womens} cartitems={cartitems} addtoCartItems={addtoCartItems}/>
    </BrowserRouter> 
    </div>
  );
}

export default App;
