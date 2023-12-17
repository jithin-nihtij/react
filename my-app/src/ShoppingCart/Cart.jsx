import React, { useContext, useState } from "react";
import { shopContext } from "./ParentRouter";
import { Button, Card, Carousel } from "react-bootstrap";
import './Cart.css';

function Cart() {
  const { cart } = useContext(shopContext);

  const [quantities, setQuantities] = useState(cart.map(() => 1));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] - 1);
    setQuantities(newQuantities);
  };

  const calculateItemTotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item, index) => {
      return total + calculateItemTotal(item.price, quantities[index]);
    }, 0);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shopping Cart</h2>

      <div className="cartGrid">
        {cart.map((item, index) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            <Carousel>
              {item.images.map((img, imgIndex) => (
                <Carousel.Item key={imgIndex}>
                  <img
                    alt={`Slide ${imgIndex}`}
                    src={img}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      width: "200px",
                      margin: "auto"
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Buy</Button>
              <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                <Button onClick={() => handleDecrement(index)}>-</Button>
                <p>{quantities[index]}</p>
                <Button onClick={() => handleIncrement(index)}>+</Button>
              </div>
              <p>Total: ${calculateItemTotal(item.price, quantities[index])}</p>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default Cart;
