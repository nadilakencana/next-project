import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const ProductPage = () =>{

    const[isLogin, setIsLogin] = useState(true);
    const[products, setProducts] = useState([]);
    const{ push } = useRouter();
    console.log(products);
    useEffect(() => {
        if(!isLogin){
            push("/auth/login")
        }
    }, [])

    useEffect(() => {
        fetch("/api/product")
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
    }, [])  

    return (
        <div>
           <ProductView products={products}/>
                
        </div>
    )
}

export default ProductPage;