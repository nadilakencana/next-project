import ProductView from "@/views/Product"
import { productType } from "@/types/product.type";

const ProductPage = (props:{products: []})=>{
    const {products} = props;
    return(
        <div>
            <ProductView products ={products}/>
        </div>
    )
}

export default ProductPage;

// di panggil setiap melakukan request/ pada saat page di buka
// server side rendering
export async function getServerSideProps(){
    // fetch data dari api
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    return {
        props: {
            products: response.data,
        },
    }
}