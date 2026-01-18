import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./navbar.module.css"

const Navbar = () =>{
    const {data} : any = useSession();
    console.log("session data navbar:", data);
    return(

        // ini cara memanggil class dari css modules
        <div className={styles.navbar}> 
            <div className="text-white font-bold">
                Navbar component
            </div>
            <div className={styles.profile}>
                {data && `Welcome, ${data.user.fullname}` }

                {data? (
                 <button className={styles.button_auth} onClick={() => signOut()}> Sign Out </button>
            ) : (
                 <button className={styles.button_auth} onClick={() => signIn()}> Sign In  </button>
            )}
            </div>
            
           
        </div>
    )
    
}

export default Navbar;