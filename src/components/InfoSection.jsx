import { infoItems } from '../assets/mockData';

const InfoSection = () => {
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 px-4'>
            {infoItems.map(({icon, title, description}, index)=>(
                <div key={index} 
                className='flex flex-col items-center text-center p-6 border rounded-lg shadow-md
                transform transition-transform duration-300 hover:scale-105'>
                    {icon}
                    <h3 className='font-semibold mt-4 text-xl'>{title}</h3>
                    <p className='text-gray-600 mt-2'>{description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection;