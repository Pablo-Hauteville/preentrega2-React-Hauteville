import React from 'react';
import './ItemListContainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = ({ productsData }) => {
  console.log(productsData)
  return (
    <div className="item-list-container">
      {productsData.map((product)=>{
         
          return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary">Ver detalle</Button>
              </Card.Body>
            </Card>
          );
        



      })}
      
      
    </div>
  );
};

export default ItemListContainer;
