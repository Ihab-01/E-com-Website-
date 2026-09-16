import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (e, product)=>{
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert(product.name + ' was added to your cart succefully');
  }

  const { name, image, price } = product;
  return (
    <div className="bg-white p-4 shadow-sm hover:shadow-md rounded-lg relative border border-gray-100 overflow-hidden 
    transform transition-all duration-300 hover:scale-105 flex flex-col justify-between cursor-pointer">
      <div className="w-full h-48 mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{name}</h3>
        <p className="text-gray-500 font-medium mt-1">${price}</p>
        <div className="flex items-center gap-1 mt-2 text-yellow-500">
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
        </div>
      </div>
      <div
        className="absolute bottom-4 right-4 flex items-center justify-center 
        h-9 w-9 bg-red-600 group text-white text-xs font-semibold rounded-full 
        hover:w-32 hover:bg-red-700 transition-all duration-300 overflow-hidden shadow-md cursor-pointer"
        aria-label="Add to Cart"
      onClick={(e)=>handleAddToCart(e, product)}>
        <span className="group-hover:hidden text-base leading-none">+</span>
        <span className="hidden group-hover:block whitespace-nowrap px-2">
          ADD TO CART
        </span>
      </div>
    </div>
  );
};

export default Product;