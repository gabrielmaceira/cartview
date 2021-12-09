import React, { useContext } from 'react';
import { Context } from '../context/context';
import { Link } from 'react-router-dom';

export const Cart = () => {
  // traemos los datos del context
  const { cart, unidades, total, onRemove } = useContext(Context);

  // uso de rendering condicional para mostrar los items del carrito en la vista o el mensaje de que no hay items agregados con el link a la home
  return unidades > 0 ? (
    <>
      <h1>ITEMS</h1>
      {cart.map((item) => {
        return (
          <article key={item.id}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} height="50px" />
            <p>Precio individual: ${item.price}</p>
            <p>Cantidad: {item.cantidad} items</p>
            <p>Subtotal: ${item.subtotal}</p>

            {/* le pasamos la funcion onRemove con el id a eliminar */}
            <button onClick={() => onRemove(item.id)}>ELIMINAR ITEM</button>
          </article>
        );
      })}
      <h1>TOTAL: ${total}</h1>
    </>
  ) : (
    <>
      <h1>NO HAY ITEMS EN TU CARRITO</h1>
      <Link to="/">IR A COMPRAR</Link>
    </>
  );
};
