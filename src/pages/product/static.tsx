import ProductView from "@/views/Product"
import { productType } from "@/types/product.type";

const ProductPage = (props:{products: productType[]})=>{
    const {products} = props;
    
    return(
        <div>
            <ProductView products ={products}/>
        </div>
    )
}

export default ProductPage;

// static site generation
export async function getStaticProps(){
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
        // revalidate: 10, // melakukan validate api data ulang setiap 10 detik 
    }
}