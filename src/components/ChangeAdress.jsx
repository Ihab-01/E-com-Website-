import { useState } from "react"

const ChangeAdress = ({setIsModalOpen ,address ,setAdress}) => {
    
    const [newAdress, setNewAdress] = useState(address);
    const handleAdress = ()=>{
        setAdress(newAdress);
        setIsModalOpen(false);
    }

  return (
    <div>
        <input type="text" placeholder="Enter New Adrdress"
        className="border p-2 w-full mb-4"
        onChange={(e)=> setNewAdress(e.target.value)}/>
        <div className="flex justify-end">
            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2 cursor-pointer
            hover:bg-red-600" onClick={()=> setIsModalOpen(false)}>Cancel</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer
            hover:bg-blue-600" onClick={handleAdress}>Save Address</button>
        </div>
    </div>
  )
}
export default ChangeAdress