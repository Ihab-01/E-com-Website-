import { Categories } from '../assets/mockData';
import hero from '../assets/images/hero.jpg'
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';

const Home = () => {
  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        <div className='w-full md:w-3/12'>
          <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5 rounded-t-md'>Shop By Categories</div>
          <ul className='space-y-4 bg-gray-100 p-3 border rounded-b-md'>
            {Categories.map((categorie, index)=>(
              <li key={index}
              className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border0red0500 rounded-full mr-2'></div>
                {categorie}
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:9/12 mt-8 md:mt-0 h-96 relative'>
          <img src={hero} alt="hero" 
          className='h-full w-full'/>
          <div className='absolute top-16 left-8'>
            <p className='mb-4 font-bold'>e-SHOP</p>
            <h2 className='text-4xl font-bold'>Welcome to e-SHOP</h2>
            <button className='bg-red-700 px-8 py-1.5 text-white mt-4 cursor-pointer rounded-md font-bold
            hover:bg-red-700 transfomr transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
    </div>
  )
}
export default Home