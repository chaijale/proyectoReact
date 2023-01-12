import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})
  const {id} = useParams()

  useEffect(()=> {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        setDetail(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      });

  }, [id])

  return (
    <div>
        <ItemDetail detail={detail}/>
    </div>
  )
}

export default ItemDetailContainer