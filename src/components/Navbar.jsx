import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from "react-redux";

const Navbar = () => {

  const cart = useSelector(state => state.cart);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 pt-4 pb-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to='/'>e-SHOP</Link>
        </div>
        <div className='relative flex-1 mx-6'>
          <form>
            <input type="text" placeholder="search product..."
            className="w-full border rounded-[10px] py-2 px-4"/>
            <button className="absolute top-3 right-3 text-red-500">
              <FaSearch/>
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-6">
          <Link to='/cart' className="relative">
            <FaShoppingCart className="text-xl"/>
            {cart.totalQuantity > 0 && 
            <span className="absolute bottom-2 text-xs w-5 h-5 left-3 bg-red-600 
            rounded-full flex justify-center items-center text-white">
              {cart.totalQuantity}
            </span>}
          </Link>
          <button className="text-xl"
          >
            <FaUser />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 pt-2 pb-4 text-sm font-bold">
        <Link to='/' className="hover:underline">Home</Link>
        <Link to='/shop' className="hover:underline">Shop</Link>
        <Link to='/contact' className="hover:underline">Contact</Link>
        <Link to='/about' className="hover:underline">About</Link>
      </div>
    </nav>
  )
}
export default Navbar