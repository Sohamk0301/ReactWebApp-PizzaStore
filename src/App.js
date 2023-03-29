import React, { useState } from "react";

const  OrderSummary = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pizzaSize, setPizzaSize] = useState("");
  const [toppings, setToppings] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePizzaSizeChange = (e) => {
    setPizzaSize(e.target.value);
  };

  const handleToppingsChange = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const calculateTotalBill = () => {
    let basePrice = 0;
    let toppingPrice = 0;

    switch (pizzaSize) {
      case "small":
        basePrice = 5.99;
        break;
      case "medium":
        basePrice = 7.99;
        break;
      case "large":
        basePrice = 9.99;
        break;
      default:
        break;
    }

    if (toppings.length > 0) {
      toppingPrice = toppings.length * 0.5;
    }

    return basePrice + toppingPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your order, ${name}! Your total bill is $${calculateTotalBill()}. We will contact you at ${phone} when your order is ready for pickup.`);
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="address">Address:</label>
        <textarea id="address" value={address} onChange={handleAddressChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} required />

        <label htmlFor="pizza-size">Pizza Size:</label>
        <select id="pizza-size" value={pizzaSize} onChange={handlePizzaSizeChange} required>
          <option value="">Select a size</option>
          <option value="small">Small ($5.99)</option>
          <option value="medium">Medium ($7.99)</option>
          <option value="large">Large ($9.99)</option>
        </select>

        <label>Toppings:</label>
        <div className="toppings">
          <label>
            <input type="checkbox" value="pepperoni" onChange={handleToppingsChange} />
            Pepperoni (+$0.50)
          </label>
          <label>
            <input type="checkbox" value="mushrooms" onChange={handleToppingsChange} />
            Mushrooms (+$0.50)
          </label>
          <label>
            <input type="checkbox" value="onions" onChange={handleToppingsChange} />
Onions (+$0.50)
</label>
<label>
<input type="checkbox" value="sausage" onChange={handleToppingsChange} />
Sausage (+$0.50)
</label>
</div>
<button type="submit">Place Order</button>
  </form>
</div>
);
};

export default OrderSummary;