import './style.css'
const Cart = ({cartitems, addtoCartItems, decreaseqty, RemoveItem}) =>{
    const totalPrice = cartitems.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <div className='Cart'>
        {/* If cart Length is Equal to zero */}
        {cartitems.length === 0 && <p className='noitems'>No Items In the Cart</p>}
        
        {/* if item is in the cart */}
        {cartitems.length !==0 && cartitems.map((item)=>(
            <div key={item.id} className='cart-items'>
                <img src={item.img} alt='img'></img>
                <div className='cart-name'>
                    <p className='itemname'>{item.name}</p>
                    <div className='cart-qty'>
                        <p><span>Quantity: </span></p>
                        <p onClick={()=> decreaseqty(item)}>-</p> 
                        <p>{item.qty}</p> 
                        <p onClick={()=>addtoCartItems(item)}>+</p> 
                    </div>
                    <p className='cart-price'><span>Price:</span> Rs {item.qty*item.price}</p>
                </div>
                <button onClick={()=>RemoveItem(item)}>Remove</button>
            </div>
        ))}
        {cartitems.length !==0 &&<p className='totalprice'><span>Total Price:</span> Rs {totalPrice}</p>}
    </div>
  );
}

export default Cart;
