import React, { useState } from 'react'

function NavBar({cartArray,cartTotalPrice}) {
   
    
    const [localuser,setLocaluser] = useState(JSON.parse(localStorage.getItem('user')));
    // const [serachProduct,setSearchProduct] = useState([]);
    // console.log(localuser);
    
    
  return (
    <div>
        <div className="navbarMain">
          <div className="leftNav">
          <h5>Home</h5>
            <h5>About</h5>
            <h5>Contact us</h5>
            <h5>Carrier</h5>
            
          </div>
          <div className="rightNav">
            <img src={localuser.image || 'https://shorturl.at/dvzJK'} alt="" />
           <p>{localuser.firstName || 'Guest'} </p>
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-vector-icon-flat-600nw-1690453492.jpg" alt="" /> <span className='cartPop'>{cartArray.length} </span>
             <span className='totalRupee'>₹{cartTotalPrice}</span>
          </div>
        </div>
    </div> 
  )
}

export default NavBar