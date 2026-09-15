import Product from "../components/Product"
import { useSelector } from "react-redux"

const Shop = () => {

    const products = useSelector(state=>state.product.products);

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