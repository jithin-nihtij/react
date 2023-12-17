import React, { useContext } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import { shopContext } from './ParentRouter';
// import { toast } from 'react-toastify'

function Home() {
 
    const { data, cart, addToCart } = useContext(shopContext);

    const handleAddToCart = (item) => {
        // Check if the item is already in the cart
        const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
          // Show an alert if the item is already in the cart
          alert('Item already added to the cart');
        } else {
          // Add the item to the cart if it's not already there
          addToCart(item);
        }
      };
  return (
    <div className='shoppingGrid'>
      {data.map((item) => (
        <div key={item.id}>
          <Card style={{ width: '18rem' }}>
            <Carousel>
              {item.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img
                    alt={`Slide ${index}`}
                    src={img}
                    style={{ objectFit: 'cover', height: '200px', width: '200px' }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{item.brand}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(item)}>
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Home;
