import { fetcher } from "@/utils/fetcher/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "@/views/Product/detailProduct"
import { productType } from "@/types/product.type";


const DetailProductPage = ({products} : {products: productType}) =>{

    const {query} = useRouter();
    // const {data, error, isLoading} = useSWR(`/api/product/${query.slug}`, fetcher);
    // console.log(data);

     return (
        <div>
            {/* client` side rendering */}
            {/*<DetailProduct product={isLoading ? [] : data.data}/>*/}
             {/* server/staic site rendering */}
            <DetailProduct product={products}/>
        </div>
     )
}

export default DetailProductPage;

// server side rendering
// export async function getServerSideProps({query}: {query: {slug: string}}){
//     // fetch data dari api
//     const res = await fetch(`http://localhost:3000/api/product/${query.slug}`);
//     const response = await res.json();

//     return {
//         props: {
//             products: response.data,
//         },
//     }
// }

// static site generation with dynamic route
export async function getStaticPaths(){
    const res = await fetch("http://localhost:3000/api/product");
    const response = await res.json();

    const paths = response.data.map((product: productType) => ({
        params: {slug: product.id}
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps({params}: {params: {slug: string}}){
const res = await fetch(`http://localhost:3000/api/product/${params.slug}`);    
const response = await res.json();

    return {
        props: {
            products: response.data,
        },
        revalidate: 10, // melakukan validate api data ulang setiap 10 detik
    }
}