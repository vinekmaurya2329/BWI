import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Swal from 'sweetalert2'


function HomePage() {
    const [product,setProduct]= useState([]);
    const [fProduct,setFProduct]= useState([]);
    const [cartArray,setCartArrya]= useState([])
    // const cartArray =[];
    const [cartTotalPrice,setCartTotalPrice] = useState(0)
    const [searchValue,setSearchValue] = useState('');
    const [minVal,setMinVal]= useState(1);
    const [maxVal,setMaxVal] = useState(99900);
//  console.log(maxVal,minVal);
    useEffect(()=>{
      async function fetchData(){
       await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((result)=>{ 
             setProduct(result);
             setFProduct(result)
            //  console.log(product,'products');
        });
      }
      fetchData();
      // eslint-disable-next-line
    },[]);

    function addcart(item){
// cartArray.push(item)
setCartArrya(prev=> [...prev,item])
Swal.fire('congrats','Added to Cart','success');
console.log(cartArray,'cartarray');

    };
    
    //  serach function
    function searchFun(){
      let url = `https://dummyjson.com/products/search?q=${searchValue}`;
      fetch(url)
.then(res => res.json())
.then((result)=>{
 setProduct(result)
  console.log(result,'serach resultttt');
});
    };
    //  filter function 
    function filterFun(){
    let items =   fProduct.products && fProduct.products.filter((item)=>{
         return  item.price >= minVal && item.price <= maxVal ;
         
       });
       let arr = { limit:100, products : items}
       setProduct(arr)
       console.log(items,'itemss');
    };
    function restoreFilter(){
      setMaxVal(9999);
      setMinVal(1);
      filterFun();
    }
   function addCartPrice(){
     let totalPrice =  cartArray.length >=1 && cartArray.reduce((x,y)=>{
       return x+y 
     })
     setCartTotalPrice(totalPrice);
     console.log(totalPrice,'carttotalprice');
   }
    
    
  return (
    <div>
        <NavBar cartArray={cartArray} cartTotalPrice = {cartTotalPrice}  />

        <div className="homeMain">
          <div id="searchDiv">
          <div className='serachField'>
          <input type="search" name="search" id="search" onChange={(e)=>setSearchValue(e.target.value)}  placeholder='search product'/>
            <button type='submit' id='SearchBtn' onClick={searchFun}>Search</button>
          </div>
          <div className='selectDiv'>
            <select name="Min" id="" onChange={(e)=>setMinVal(e.target.value)}>
              <option value="0">Min</option>
              <option value="5">5$</option>
              <option value="10">10$</option>
              <option value="15">15$</option>
              <option value="20">20$</option>
              <option value="50">50$</option>
            </select>
            <select name="Max" id="" onChange={(e)=>setMaxVal(e.target.value)}>
              <option value="99999">Max</option>
              <option value="100">100$</option>
              <option value="150">150$</option>
              <option value="200">200$</option>
              <option value="250">250$</option>
              <option value="1800">1800$</option>
            </select>
            <button onClick={filterFun}>Apply filter</button>|
            <button onClick={restoreFilter}>↺</button>
          </div>
          </div>  
        <div className='cardContainer'>
        
     { product.products &&
         product.products.length >0 ? product.products.map((item)=>{
            return  <div className="card-image">
             
            <img src={item.thumbnail} alt="" />
<div className="card-details">
            <h3>{item.brand}</h3>
            <h5>{item.title}</h5>
            <h4> <span style={{color:'green',padding:'0 5px'}}>{item.discountPercentage}% off </span><br/> price: {item.price} $</h4>
              <button className='cartBtn' onClick={()=>{addcart(item.price);addCartPrice()}}>add to cart</button>
             {/* <details><p>{item.description}</p></details> */}
        </div>
        </div>
         }):(<h1>no item here</h1>)


     }
        </div>
        </div>
    </div>
  )
}

export default HomePage