// src/components/OrderConfirmation.js
import React from 'react';

const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      <p>Thank you for your purchase!</p>
      <p>Order Number: {orderDetails.orderNumber}</p>
      <p>Estimated Delivery Time: {orderDetails.deliveryTime}</p>
    </div>
  );
};

export default OrderConfirmation;
