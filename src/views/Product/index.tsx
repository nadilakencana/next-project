import style from "./Product.module.scss";
import { productType } from "@/types/product.type";
import Link from "next/link";


const ProductView = ({products} : {products: productType[]}) =>{
    return(
         <div className={style.product}>
            <h2 className={style.product__title}>Product</h2>
            < div className={style.product__list}>
            {products.length > 0 ? (
                <>
                    {products.map((product: productType) => (
                        <Link href={`/product/${product.id}`} key={product.id} className={style.product__list__item}>
                            <div className={style.product__list__item__image}>
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h4 className={style.product__list__item__name}>{product.name}</h4> 
                            <p className={style.product__list__item__category}>{product.categories}</p>
                            <p className={style.product__list__item__price}>{product.price.toLocaleString('id-ID',{
                                style: 'currency',
                                currency: 'IDR',
                                minimumFractionDigits: 0
                            })}</p>
                        </Link>
                    ))}
                </>
            ) : (
                <div className={style.product__list__skeleton}>
                    <div className={style.product__list__skeleton__image}/>
                    <div className={style.product__list__skeleton__name}/>
                    <div className={style.product__list__skeleton__category}/>
                    <div className={style.product__list__skeleton__price}/>
                </div>
            )}
                
            </div>
                
        </div>
    );
   
}
export default ProductView;