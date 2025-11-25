import styles from "@/styles/Error404.module.scss";


const CustomError404 = () => {

    return (
        <div className={styles.error}>
            <img src="/notfound.png" alt="404" className={styles.error__image}/>
            <h1>404 - Page Not Found</h1>
        </div>
    )
}

export default CustomError404;