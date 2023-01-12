import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([])
  const {categoryId}  = useParams()
  
  useEffect(()=> {

    fetch('https://fakestoreapi.com/products')
      .then(response => {
        return response.json()
      })
      .then(products => {
        if (categoryId) {
          const producFiltrado = products.filter(producto => producto.category === categoryId)
          setProducts(producFiltrado)
        } else {
          setProducts(products)
        }
      })
      .catch((err) => {
        alert("Hubo un error")
      });

  }, [categoryId])

  return (
    <div>
        <ItemList productos={products}/>
    </div>
  )
}

export default ItemListContainer