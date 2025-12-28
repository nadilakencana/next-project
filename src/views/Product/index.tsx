import style from "./Product.module.scss";


type productType = {
    id: string;
    name: string;
    price: number;
    categories: string;
    image: string;
};



const ProductView = ({products} : {products: productType[]}) =>{
    return(
         <div className={style.product}>
            <h2 className={style.product__title}>Product</h2>
            <div className={style.product__list}>
                {products.map((product: productType) => (
                    <div key={product.id} className={style.product__list__item}>
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
                    </div>
                ))}
            </div>
                
        </div>
    );
   
}
export default ProductView;