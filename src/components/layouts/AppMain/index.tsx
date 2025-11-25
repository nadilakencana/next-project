import { useRouter } from "next/router";
import Navbar from "../Navbar" 


const disableNavbar = ["/auth/login", "/auth/regist", "/404"];

const AppMain = ({children}: {children: React.ReactNode}) =>{
    const {pathname} = useRouter();
    // path name akan mengembalikan string dari route yang sedang di akses, ini berguna untuk conditional rendering

    return(
        <main>
            {/* conditional rendering jika pathname nya tidak ada di array disable navbar maka munculkan navbar */}
            {!disableNavbar.includes(pathname) && <Navbar />}
           
            {children}
        </main>
    )
}

export default AppMain;