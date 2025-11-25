import { useRouter } from "next/router";



const DetailCategoryPage = () =>{

    const {query} = useRouter();
    console.log(query.slug); // Access the dynamic route parameter 'slug'

     return (
        <div>
            <h1>Detail Category</h1>
            <span>Category: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</span>
        </div>
     )
}

export default DetailCategoryPage;