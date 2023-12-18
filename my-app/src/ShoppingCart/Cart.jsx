import React, { useContext, useState } from "react";
import { shopContext } from "./ParentRouter";
import { Button, Card, Carousel } from "react-bootstrap";
import './Cart.css';
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cart,setCart } = useContext(shopContext);

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


  const handleDelete=(index)=>{
    const confirmDeleted = window.confirm("Are you sure you want to remove this?")

    if (confirmDeleted){
      const updated = cart.filter((_,i)=> i !== index);
      setCart(updated)
    }
  }

  if(cart.length == 0){
    return(
      <div style={{display:"flex",height:"694px",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(18, 17, 49)",color:"white"}}>
        <h2><MdDelete /></h2>
        <h2>Cart is empty </h2>
      </div>
    )
  }

  return (
    <div style={{backgroundColor:"rgb(18, 17, 49)"}}>
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
              <div style={{display:"flex",flexDirection:"column"}}>
              <Button variant="primary">Buy</Button>
              <Button variant="danger" style={{margin:"20px"}} onClick={()=>handleDelete(index)}>Remove From Cart</Button>
              </div>
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
        <h3 style={{color:"white"}}>Total: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
}

export default Cart;
