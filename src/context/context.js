import React, { useState } from 'react';

const Context = React.createContext();

const CartFuncion = ({ children }) => {
  const [cart, setCart] = useState([]);

  // este valor serian las unidades totales del carrito
  const [unidades, setUnidades] = useState(0);

  //este valor seria el precio total del carrito
  const [total, setTotal] = useState(0);

  const onAdd = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      setCart([
        ...cart,
        {
          ...producto,
          cantidad: cantidad,
          subtotal: producto.price * cantidad,
        },
      ]);
      setTotal(total + producto.price * cantidad);

      // para que el contador sume TODOS los items y no los items diferentes le sumamos cantidad
      setUnidades(unidades + cantidad);
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.price * cantidad;
        }
        return item;
      });
      setCart(cartAux);
      setTotal(total + producto.price * cantidad);

      // aca tambien le sumamos cantidad si el item ya existe para que sea consistente
      setUnidades(unidades + cantidad);
    }
  };

  /* FUNCION BORRAR ITEM - recibe el id del item a borrar como parametro*/
  const onRemove = (id) => {
    //buscamos el item a borar en nuestro carrito
    const myItem = cart.find((item) => item.id === id);

    //usamos el filter para devolver todos los items que NO son el que queremos borrar
    const cartAux = cart.filter((item) => item.id !== id);

    //actualizamos el carrito con el cartAux que tiene TODOS los items MENOS el que queriamos borrar
    setCart(cartAux);

    //actualizamos las unidades restandole la cantidad que teniamos de ese item
    setUnidades(unidades - myItem.cantidad);

    //actualizamos el precio total del carrito restandole el precio total (subtotal) que teniamos del item que queriamos borrar
    setTotal(total - myItem.subtotal);
  };

  // pasamos la funcion nueva a nuestro Provider --> onRemove
  return (
    <Context.Provider value={{ cart, unidades, total, onAdd, onRemove }}>
      {children}
    </Context.Provider>
  );
};

export { CartFuncion, Context };
