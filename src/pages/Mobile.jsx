import { Fragment, useState } from 'react';
import MobileData from "../data/data.json";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cart';

export default function Trending_page() {
  const Mobiles=MobileData.MobilesData;
  const[selectedOptions,setselectedOptions]=useState([]);
  const[open,setopen]=useState(false);
  const[showmsg, setshowmsg] = useState(false);
  const {addToCart} = useContext(CartContext);
  
  function handle(item){
    addToCart(item);
    setshowmsg(true);
    setTimeout(()=>{
      setshowmsg(false);
    },3000)
  }
  function show(e){
    e.stopPropagation();
    setopen(!open);
  }
  const handleCheckBox=(e)=>{
    const value=e.target.value;
    setselectedOptions((prevselected)=>{
      if(prevselected.includes(value)){
        return prevselected.filter((option) => option !== value);
      }
      else{
        return [...prevselected, value];
      }
    });
  }
  const filterData=Mobiles.filter((item)=>{
    if(selectedOptions.length===0){
      return true;
    }
    else{
      return selectedOptions.includes(item.brand);
    }
  });
  return (
    <div className='filter_data'>
    {
      showmsg && <p className='message'>Added to cart</p>
    }
    <div className='filter'>
    <button onClick={show} className='select'>Filter</button>
    {
    open && 
    <Fragment>
    <label><input className='check' type='checkbox' value="Apple" checked={selectedOptions.includes('Apple')} onChange={handleCheckBox}/>Apple</label>
    <label><input className='check' type='checkbox' value="Redmi" checked={selectedOptions.includes('Redmi')} onChange={handleCheckBox}/>Redmi</label>
    <label><input className='check' type='checkbox' value="Samsung" checked={selectedOptions.includes('Samsung')} onChange={handleCheckBox}/>Samung</label>
    </Fragment>
    }
    </div>
    <div className='Trending_page'>
    {
      filterData.map((item,id)=>{
        return(
          <div key={id} className='Product'>
          <Link to={`${id}`}>
          <div className='Product_images'>
            <img src={item.src} />
        </div>
        </Link>
        <div className='Product_name'>
          <h4 className='mobile_name'>{item.name}</h4>
          <p className='mobile_price'>₹{item.price}</p>
          <button className="btn-1" role="button" onClick={()=>handle(item)}>Add to cart</button>
          </div>
          </div>
        )
      })
    }
      </div>
      </div>
  )
}
