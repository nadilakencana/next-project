import { fetcher } from "@/utils/fetcher/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "@/views/Product/detailProduct";
const DetailProductPage = () =>{

    const {query} = useRouter();
    const {data, error, isLoading} = useSWR(`/api/product/${query.slug}`, fetcher);
    console.log(data);

     return (
        <div>
            <h1>Detail Product</h1>
            <DetailProduct product={isLoading ? [] : data.data}/>
        </div>
     )
}

export default DetailProductPage;