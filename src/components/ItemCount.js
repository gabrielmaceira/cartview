import React, { useState } from 'react';

export const ItemCount = ({ stock, initial, addItem }) => {
  const [count, setCount] = useState(initial);

  const addCount = () => {
    stock > count && setCount(count + 1);
  };

  const subtractCount = () => {
    initial < count && setCount(count - 1);
  };

  return (
    <div className="ItemCount">
      <div className="button-ItemCount">
        <button onClick={subtractCount} disabled={initial >= count}>
          -
        </button>
        <p className="counter-value">{count}</p>
        <button onClick={addCount} disabled={stock <= count}>
          +
        </button>
      </div>
      <button className="big-btn" onClick={() => addItem(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
