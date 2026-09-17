import ChangeAdress from "./ChangeAdress";

const Modal = ({isModalOpen, setIsModalOpen, address, setAdress}) => {
    if (!isModalOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 
    flex items-center justify-center z-50">
        <div className=" bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-600 text-3xl rounded-full h-10 w-10
            transform transition-all duration-300 hover:scale-150 cursor-pointer"
            onClick={()=> setIsModalOpen(false)}>&times;</button>
            <dir>
                <ChangeAdress setIsModalOpen={setIsModalOpen} address={address} setAdress={setAdress}/>
            </dir>
        </div>
    </div>
  )
}
export default Modal