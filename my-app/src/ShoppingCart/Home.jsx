import React, { useContext } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import { shopContext } from './ParentRouter';


function Home() {
 
    const { data, cart, addToCart } = useContext(shopContext);

    const handleAddToCart = (item) => {
    
        const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
  
          alert('Item already added to the cart');
        } else {
        
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
