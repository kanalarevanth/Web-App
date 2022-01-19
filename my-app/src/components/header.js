import './style.css';
import {Link} from 'react-router-dom';
import Modal from 'react-modal'
import {useState} from 'react'
import Cart from './cart'
function Header({cartitems, addtoCartItems, decreaseqty, RemoveItem}) {
  const [modalstatus, setmodalstatus] = useState(false)
  return (
    <div className='mens'>
      <div className='header'>
        <div className='right-text'>
            <Link to="/" className='link'><h1>BlablaCart</h1></Link> 
        </div>
        <div className='left-items'>
          <div className='cart'>
            <p>{cartitems.length}</p>
            <i class="fas fa-shopping-cart" onClick={() => setmodalstatus(true)}></i>
          </div>
          <p>UserName</p>
        </div>
      </div>

          {/* Pop Up cart */}

        <Modal isOpen={modalstatus} onRequestClose = {() => {setmodalstatus(false)}} className="cartmodal">
          <div>
            <p onClick={() => {setmodalstatus(false)}} className='modal-close'>X</p>
            <Cart cartitems={cartitems} addtoCartItems={addtoCartItems} decreaseqty={decreaseqty} RemoveItem={RemoveItem}/>
          </div>
        </Modal>
    </div>
  );
}

export default Header;
