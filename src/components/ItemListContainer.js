import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

//import de db que creamos nosotros
import db from '../firebase/firebase';

//import de las funciones para traer colecciones, muchos datos
import { collection, query, where, getDocs } from 'firebase/firestore';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItems = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setItems(results);
      })
      .finally(() => setLoader(false));
  }, [categoryId]);

  return loader ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
