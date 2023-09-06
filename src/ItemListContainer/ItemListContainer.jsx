import React from 'react';
import './ItemListContainer.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemListContainer = ({ productsData }) => {
  /* console.log(productsData) */
  return (
    <div className="item-list-container" >
      {productsData.map((product)=>{
          
          return (
            
            <Card style={{ width: '18rem' }} key={product.id}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  {"USD$"+ product.price}
                </Card.Text>           

                <Button variant="primary">Ver detalle de producto</Button>
              </Card.Body>
            </Card>
            
          );
        



      })}
      
      
    </div>
  );
};

export default ItemListContainer;
