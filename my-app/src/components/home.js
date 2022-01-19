import {Routes, Route } from 'react-router-dom';
import Mens from './men';
import Womens from './womens';

const Home = ({mens, womens, cartitems, addtoCartItems}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mens mens={mens} addtoCartItems={addtoCartItems}/>} />
        <Route path="/women" element={<Womens womens={womens} addtoCartItems={addtoCartItems}/>} />
      </Routes>
      </div>
  );
}

export default Home;