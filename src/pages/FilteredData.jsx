import { useSelector } from "react-redux";
import Product from '../components/Product';

const FilteredData = () => {

    const filteredProducts = useSelector(state => state.product.filteredData);

  return (
    <div className='mx-auto py-12'>
        {filteredProducts?.length > 0 ? (
          <div>
              <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
              {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
              </div>
          </div>
        ) : (
          <div className="flex justify-center">
              <h3>No Products were found</h3>
          </div>
        )}
    </div>
  );
}

export default FilteredData;