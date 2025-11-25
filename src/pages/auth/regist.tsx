import Link from "next/link";

const LoginPage = ()=>{
    return (
        <div>
            <h1>Rgist Page</h1>
            <span>sudah punya Akun? Masuk <Link href={"/auth/login"}>Disini</Link></span>
        </div>
    );

}

export default LoginPage;