import React, { useContext, useState } from 'react';
import { ItemCount } from './ItemCount';
import { Context } from '../context/context';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, name, category, image, price, stock }) => {
  const [purchased, setPurchased] = useState(false);
  const { onAdd } = useContext(Context);

  const addItem = (count) => {
    if (count > 0) {
      onAdd({ id, name, category, image, price, stock }, count);
      setPurchased(true);
    } else {
      alert('La cantidad debe ser mayor a cero');
    }
  };

  return (
    <div className="prod-detail">
      <div className="detail-row">
        <img src={image} alt={`${id}-${name}`} className="flex-col" />
        <section className="flex-col">
          <h1>{name}</h1>
          <p>Deberia tener algun tipo de descripcion tambien</p>
          <h2>${price}</h2>
          <p>Stock disponible: {stock}</p>
        </section>
      </div>
      {!purchased ? (
        <ItemCount stock={stock} initial={1} addItem={addItem} />
      ) : (
        <Link to="/cart">Terminar compra</Link>
      )}
    </div>
  );
};
