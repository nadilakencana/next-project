import { useRouter } from "next/router";



const DetailProductPage = () =>{

    const {query} = useRouter();
    console.log(query.slug); // Access the dynamic route parameter 'slug'

     return (
        <div>
            <h1>Detail Product</h1>
            <span>Product: {query.slug}</span>
        </div>
     )
}

export default DetailProductPage;