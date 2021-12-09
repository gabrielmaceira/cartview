import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

import db from '../firebase/firebase'; //este es el que creamos

//imports para traer UN solo dato
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoader(true);

    const myItem = doc(db, 'products', itemId);

    // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setProduct(result);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return loader ? <h1>CARGANDO...</h1> : <ItemDetail {...product} />;
};
