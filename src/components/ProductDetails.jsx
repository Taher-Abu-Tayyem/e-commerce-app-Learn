import {React,useEffect,useState} from 'react'
import {  useParams } from 'react-router-dom';
import Product from './Product';
const ProductDetails = () => {
    const api_url='https://fakestoreapi.com/products';
    const params = useParams();
    const [product,setProducts]=useState({})
    console.log(params);
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
                .then(res=>res.json())
                .then(product=>setProducts(product))
      },[])
  return (
    // <div>ProductDetails-{product.title} <br/>{params.productId}</div>
    <>
    <Product product={product} showButton={false} />
    </>
  )
}

export default ProductDetails