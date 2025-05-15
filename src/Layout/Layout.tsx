import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <main>
            This is layout
            <Outlet/>
        </main>
    )
}

export default Layout