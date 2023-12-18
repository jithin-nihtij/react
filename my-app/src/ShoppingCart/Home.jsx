import React, { useContext } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import './Home.css';
import { shopContext } from './ParentRouter';


function Home() {
 
    const { data, cart, addToCart,bg,changeMode } = useContext(shopContext);

    const handleAddToCart = (item) => {
    
        const isItemInCart = cart.some((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
  
          alert('Item already added to the cart');
        } else {
        
          addToCart(item);
        }
      };
  return (
    <div className='shoppingGrid' style={{backgroundColor:bg?"white":"rgb(18, 17, 49)"}} >
      {data.map((item) => (
        <div key={item.id}>
          <Card style={{ width: '18rem' ,backgroundColor:bg?'#bac6cf' :'rgb(12, 11, 31)',color:bg?'black':'white'}}>
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
            <Card.Body style={{}}>
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
