import Link from "next/link";
import styles from "./regist.module.scss"

const RegisterView = () =>{
    return (
         <div className={styles.register__container}>
            <h1 className={styles.register__container__title}>Regist Page</h1>
            <div className={styles.register__container__form}>
                <form action="">
                    <div className={styles.input__group}>
                        <label htmlFor="fullname" className={styles.input__group__label}>Full Name</label>
                        <input className={styles.input__group__input} type="text" id="fullname" name="fullname" placeholder="Enter your full name"/>
                    </div>
                    <div className={styles.input__group}>
                        <label htmlFor="email" className={styles.input__group__label}>Email</label>
                        <input className={styles.input__group__input} type="email" id="email" name="email" placeholder="Enter your email"/>
                    </div>
                    <div className={styles.input__group}>
                        <label htmlFor="password" className={styles.input__group__label}>Password</label>
                        <input className={styles.input__group__input} type="password" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    
                    <button className={styles.btn__submit} type="submit">Register</button>
                </form>
                
               
            </div>
            <span>sudah punya Akun? Masuk <Link href={"/auth/login"}>Disini</Link></span>
        </div>
    );
}

export default RegisterView;