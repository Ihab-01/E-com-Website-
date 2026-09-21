const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input type="text" placeholder="Enter your Nmae"
                className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" placeholder="Enter your Email"
                className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" placeholder="Enter Password"
                className="w-full px-3 py-2 border"/>
            </div>
            <div className="mb-4">
                <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
            </div>
        </form>
        <div className="text-center">
            <span className="text-gray-700">Already have an account?</span>
            <button className="text-red-800 cursor-pointer"
            onClick={openLogin}>Login</button>
        </div>
    </div>
  )
}
export default Register