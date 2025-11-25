import styles from "./navbar.module.css"

const Navbar = () =>{
    return(

        // ini cara memanggil class dari css modules
        <div className={styles.navbar}> 
            <div className="text-red-800 font-bold underline">
                Navbar component
            </div>
        </div>
    )
    
}

export default Navbar;