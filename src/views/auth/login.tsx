import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss"


const LoginView = ()=>{

    const{ push } =  useRouter();
    const hendlerLogin = () => {
        push("/product")
    }


    return (
        <div className={styles.login}>
            <h1>Login Page</h1>
            <button onClick={() => hendlerLogin()}>Product</button>
            <span>Belum punya Akun? Daftar <Link href={"/auth/regist"}>Disini</Link></span>
        </div>
    );

}

export default LoginView;