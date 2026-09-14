import { genders } from "../assets/mockData"

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {genders.map(({title, image}, index)=>(
            <div key={index} 
            className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={image} alt={title} 
                className="w-full h-full object-cover rounded-lg shadow-md"/>
                <div className="absolute top-5 left-5">
                    <p className="text-red-600 text-3xl font-bold">{title}</p>
                    <p className="text-red-800 font-bold
                    transform transition-transform duration-300 hover:scale-105 hover:underline">View All</p>
                </div>
            </div>
        ))}
    </div>
  )
}
export default CategorySection