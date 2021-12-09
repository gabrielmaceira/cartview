import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';

//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PRODUCTOS' },
    { id: '123asf', address: '/category/A', text: 'CATEGORIA A' },
    { id: 'sgs3q3', address: '/category/B', text: 'CATEGORIA B' },
    { id: 'gkl98s', address: '/category/C', text: 'CATEGORIA C' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => {
                return isActive ? 'activeClass' : '';
              }}
            >
              {cat.text}
            </NavLink>
          </div>
        );
      })}
      <CartWidget />
    </section>
  );
};
