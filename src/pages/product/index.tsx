import { fetcher } from "@/utils/fetcher/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";


const ProductPage = () =>{

    const[isLogin, setIsLogin] = useState(true);
    // const[products, setProducts] = useState([]);
    const{ push } = useRouter();
    // console.log(products);
    useEffect(() => {
        if(!isLogin){
            push("/auth/login")
        }
    }, [])

    const { data, error, isLoading } = useSWR("/api/product", fetcher);
    console.log(data);
    console.log(error);
    console.log(isLoading);

    // useEffect(() => {
    //     fetch("/api/product")
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data.data))
    // }, [])  

    return (
        <div>
           <ProductView products={isLoading ? [] : data.data}/>
                
        </div>
    )
}

export default ProductPage;