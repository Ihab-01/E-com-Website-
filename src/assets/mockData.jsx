import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from 'react-icons/fa';
import Man from './images/man.png';
import Woman from './images/woman.jpg';
import Kid from './images/kid.jpg';
import Bag from './images/bag.jpg';
import Boot from './images/boot.jpg';
import Cap from './images/cap.jpg';
import Dove from './images/dove.jpg';
import Headphones from './images/headphones.jpg';
import Robot from './images/robot.jpg';
import Sandal from './images/sandal.jpg';
import Shirt from './images/shirt.jpg';
import Watch from './images/watch.jpg';

export const Categories = [
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Beauty',
    'Sports',
    'Automotive',
];

export const infoItems = [
    {
        icon: <FaShippingFast className='text-3xl text-red-600' />,
        title: 'Free Shipping',
        description: 'Get your orders delivered with no extra cost',
    },
    {
        icon: <FaHeadset className='text-3xl text-red-600' />,
        title: 'Support 24/7',
        description: 'We are here to assist you anytime',
    },
    {
        icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
        title: '100% Money Back',
        description: 'Full refund if you are not satisfied',
    },
    {
        icon: <FaLock className='text-3xl text-red-600' />,
        title: 'Payment Secure',
        description: 'Your payment information is safe with us',
    },
    {
        icon: <FaTag className='text-3xl text-red-600' />,
        title: 'Discount',
        description: 'Enjoy the best prices on our products',
    },
];

export const genders = [
    {
        title: 'Men',
        image: Man,
    },
    {
        title: 'Women',
        image: Woman,
    },
    {
        title: 'Kids',
        image: Kid,
    },
];

export const Products = [
    {
        id:1,
        image:Bag,
        name:'Bag',
        price: 29.99,
    },
    {
        id:2,
        image:Boot,
        name:'Boot',
        price: 49.99,
    },
    {
        id:3,
        image:Cap,
        name:'Cap',
        price: 19.99,
    },
    {
        id:4,
        image:Dove,
        name:'Dove',
        price: 9.99,
    },
    {
        id:5,
        image:Headphones,
        name:'Headphones',
        price: 199.99,
    },
    {
        id:6,
        image:Robot,
        name:'Robot',
        price: 999.99,
    },
    {
        id:7,
        image:Sandal,
        name:'Sandal',
        price: 19.99,
    },
    {
        id:8,
        image:Shirt,
        name:'Shirt',
        price: 59.99,
    },
    {
        id:9,
        image:Watch,
        name:'Watch',
        price: 99.99,
    },
]