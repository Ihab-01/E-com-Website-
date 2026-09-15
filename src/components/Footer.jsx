import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>e-SHOP</h3>
          <p className='mt-4'>With us you experience the best online shopping</p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h4 className='text-lg font-semibold'>Quick Links</h4>
          <ul className='mt-4 space-y-2'>
            <li>
              <Link to='/' className='hover:underline'>Home</Link>
            </li>
            <li>
              <Link to='/shop' className='hover:underline'>Shop</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:underline'>Contact</Link>
            </li>
            <li>
              <Link to='/about' className='hover:underline'>About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='text-lg font-semibold'>Follow us</h4>
          <div className='flex space-x-5 mt-4'>
            <a href="#" className='hover:text-gray-400 transform transition-all duration-500 hover:scale-180'><FaFacebook /></a>
            <a href="#" className='hover:text-gray-400 transform transition-all duration-500 hover:scale-180'><FaTwitter /></a>
            <a href="#" className='hover:text-gray-400 transform transition-all duration-500 hover:scale-180'><FaInstagram /></a>
            <a href="#" className='hover:text-gray-400 transform transition-all duration-500 hover:scale-180'><FaLinkedin /></a>
            <a href="#" className='hover:text-gray-400 transform transition-all duration-500 hover:scale-180'><FaGithub /></a>
          </div>
          <form className='flex items-center justify-center mt-8'
          onSubmit={(e) => {
          e.preventDefault();
          }}>
            <input 
              type="email" 
              placeholder='Enter Your Email'
              className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none'
            />
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg border border-red-600 cursor-pointer'>Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;