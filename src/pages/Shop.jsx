import { useEffect } from "react";
import Product from "../components/Product"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from '../redux/productSlice';
import { Products } from '../assets/mockData';


const Shop = () => {

    const products = useSelector(state=>state.product.products);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(setProducts(Products));
    },[])

  return (
    <div className='mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {products?.map((product)=>(
            <Product key={product.id} product={product}/>
          ))}
        </div>
    </div>
  )
}
export default Shop