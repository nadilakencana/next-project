import { productType } from "@/types/product.type";
import style from "./detail.module.scss";

const DetailProduct= ({product}: {product: productType}) =>{
    return (
         <div className={style.product__detail}>
            <div className={style.product__detail__image}>
                <img src={product.image} alt={product.name} />
            </div>
            <h4 className={style.product__detail__name}>{product.name}</h4> 
            <p className={style.product__detail__category}>{product.categories}</p>
            <p className={style.product__detail__price}>
                {typeof product.price === 'number' 
                    ? product.price.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0
                    })
                    : `Rp ${product.price}`
                }
            </p>

        </div>
    )
}

export default DetailProduct;