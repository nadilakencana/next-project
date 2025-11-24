import Navbar from "../Navbar" 



const AppMain = ({children}: {children: React.ReactNode}
) =>{
    return(
        <main>
            <Navbar />
            {children}
        </main>
    )
}

export default AppMain;