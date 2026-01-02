import { retrieveData, retrieveDataById } from "@/utils/db/service";  
import type { NextApiRequest,NextApiResponse } from "next";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

type Data = {
    status: Boolean;
    statusCode: number;
    data: any;
   
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if(req.query.product![1]){
            const product = await retrieveDataById("products", req.query.product![1]);
            res.status(200).json({
                status: true,
                statusCode: 200,
                data: product
            })
        }else{
            const products = await retrieveData("products");
            console.log(products)
            res.status(200).json({
                status: true,
                statusCode: 200,
                data: products
            });
        }
        
    } catch (error) {
        res.status(500).json({
            status: false,
            statusCode: 500,
            data: null
        });
    }
}
// const ProductPage = () =>{

//     const[isLogin, setIsLogin] = useState(false);
//     const{ push } = useRouter();

//     useEffect(() => {
//         if(!isLogin){
//             push("/auth/login")
//         }
//     }, [])


//     return (
//         <div>
//             <h2>Product Page</h2>
//         </div>
//     )
// }

// export default ProductPage;