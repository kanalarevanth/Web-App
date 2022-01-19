import './style.css'
import {Link} from 'react-router-dom'
const Mens = ({mens, addtoCartItems}) => {
  return (
  <div className='conatiner-body'>
    <div className='side-bar'>
      <Link to="/" className='link'><p className='men-link'>Mens</p></Link>
      <Link to="/women" className='link'><p >Womens</p></Link> 
    </div>
    <div className='products'>
        {mens.map((items)=>(
            <div className='product-items' key={items.id}>
              <img src={items.img} alt='img' ></img>
              <p>{items.name}</p>
              <p>Rs. {items.price}</p>
              <button onClick={()=>addtoCartItems(items)}>Add to Cart</button>
            </div>
        ))}
    </div>
  </div>
  );
}

export default Mens;

