const OrderConfirmation = ({order}) => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-semibold mb-4">Thank you for shopping with us</h2>
        <p>Your order has placed succefully ypu will recieve an email with the order information</p>
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-3xl font-semibold mb-6">Order summary</h3>
            <span>OrderNumber: </span>
            <span className="font-semibold">{order.orderNumber}</span>
            <div className="mt-4">
                <h4 className="text-xl font-semibold mb-2">Shipping information</h4>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Products ordered</h3>
                {order.products.map((product)=>(
                    <div key={product.id} className="mt-2">
                        <span>{product.name} x {product.quantity}= </span>
                        <span className="font-semibold">{(product.price*product.quantity).toFixed(2)}$</span>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <span>Total price: </span>
                <span className="font-semibold">{order.totalPrice.toFixed(2)}$</span>
            </div>
            <div className="mt-6 flex justify-center">
                <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 cursor-pointer w-50 rounded-md">Order tracking</button>
            </div>
        </div>
    </div>
  )
}
export default OrderConfirmation