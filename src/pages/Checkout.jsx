import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Checkout = ({setOrder}) => {
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(false);
    const [paymentToggle, setPaymentToggle] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cash on delivery');
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        zip: '',
    })

    const navigate = useNavigate();
    const handleOrder = ()=>{
        const newOrder = {
            products: cart.products,
            orderNumber: Date.now(),
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice,
        }
        setOrder(newOrder);
        navigate('/order-confirmation');
    }

    const cart = useSelector(state => state.cart);

    return (
        <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
            <h3 className='text-2xl font-semibold mb-4'>Checkout</h3>
            <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10 mt-8'>
                <div className='md:w-2/3 space-y-6'>
                    <div className="border p-4 rounded shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer"
                        onClick={() => setBillingToggle(!billingToggle)}>
                            <h3 className="text-lg font-semibold">Billing information</h3>
                            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${billingToggle ? '' : 'hidden'}`}>
                            <div>
                                <label className="block text-gray-700">Name</label>
                                <input type="text" name="name"
                                placeholder="Enter your name"
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Email</label>
                                <input type="email" name="Email"
                                placeholder="Enter your Email"
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone number</label>
                                <input type="text" name="phone number"
                                placeholder="Enter your phone number"
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 rounded shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer"
                        onClick={() => setShippingToggle(!shippingToggle)}>
                            <h3 className="text-lg font-semibold">Shipping information</h3>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`space-y-4 mt-4 ${shippingToggle ? '' : 'hidden'}`}>
                            <div>
                                <label className="block text-gray-700">Address</label>
                                <input type="text" name="adress"
                                placeholder="Enter your adress"
                                onChange={(e)=>setShippingInfo({...shippingInfo, address: e.target.value})}
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">City</label>
                                <input type="text" name="city"
                                placeholder="Enter your city"
                                onChange={(e)=>setShippingInfo({...shippingInfo, city: e.target.value})}
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                            <div>
                                <label className="block text-gray-700">Zip code</label>
                                <input type="text" name="zip code"
                                placeholder="Enter your zip code"
                                onChange={(e)=>setShippingInfo({...shippingInfo, zip: e.target.value})}
                                className="w-full px-3 py-2 border rounded"/>
                            </div>
                        </div>
                    </div>
                    <div className="border p-4 rounded shadow-sm">
                        <div className="flex items-center justify-between cursor-pointer"
                        onClick={() => setPaymentToggle(!paymentToggle)}>
                            <h3 className="text-lg font-semibold">Payment method</h3>
                            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                        <div className={`flex flex-col items-start space-y-2 mt-4 ${paymentToggle ? '' : 'hidden'}`}>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name="payment"
                                checked={paymentMethod === 'cash on delivery'}
                                onChange={() => setPaymentMethod('cash on delivery')}
                                className="mr-2 cursor-pointer"/>
                                <label className="text-gray-700">Cash on delivery</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input type="radio" name="payment"
                                checked={paymentMethod === 'debit card'}
                                onChange={() => setPaymentMethod('debit card')}
                                className="mr-2 cursor-pointer"/>
                                <label className="text-gray-700">Debit card</label>
                            </div>
                            {paymentMethod === 'debit card' && (
                                <div className="bg-gray-100 p-4 rounded-lg mb-4 w-full">
                                    <h3 className="text-xl font-semibold mb-4">Debit card information</h3>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-semibold mb-2">Card number</label>
                                        <input type="text" placeholder="Enter your card number"
                                        className="border p-2 w-full rounded" required/>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-semibold mb-2">Card holder name</label>
                                        <input type="text" placeholder="Enter card holder name"
                                        className="border p-2 w-full rounded" required/>
                                    </div>
                                    <div className="flex justify-between space-x-4 mb-4">
                                        <div className="w-1/2">
                                            <label className="block text-gray-700 font-semibold mb-2">Expire date</label>
                                            <input type="text" placeholder="MM/YY"
                                            className="border p-2 w-full rounded" required/>
                                        </div>
                                        <div className="w-1/2">
                                            <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                                            <input type="text" placeholder="CVV"
                                            className="border p-2 w-full rounded" required/>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border h-fit'>
                    <h3 className="text-lg font-semibold mb-4">Order summary</h3>
                    <div className="space-y-4 max-h-60 overflow-y-auto">
                        {cart?.products && cart.products.length > 0 ? (
                            cart.products.map((product) => (
                                <div key={product.id} className="flex justify-between items-center border-b pb-3">
                                    <div className="flex items-center">
                                        <img src={product.image} alt={product.name} 
                                        className="w-16 h-16 object-contain rounded"/>
                                        <div className="ml-4">
                                            <h4 className="text-md font-semibold">{product.name}</h4>
                                            <p className="text-gray-600">${product.price} x {product.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-800 font-medium">
                                        ${product.price * product.quantity}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No items in checkout.</p>
                        )}
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <div className="flex justify-between text-base font-bold">
                            <span>Total price:</span>
                            <span>${cart?.totalPrice?.toFixed(2) || '0.00'}</span>
                        </div>
                    </div>
                    <button onClick={handleOrder}
                    className="w-full bg-red-600 text-white py-2 mt-6 rounded hover:bg-red-800 cursor-pointer transition">
                        Place order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout;