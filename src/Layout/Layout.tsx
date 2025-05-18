import { Outlet } from "react-router-dom"
import * as _ from './style';

const Layout = () => {
    return(
        <_.Mobile>
            This is layout
            <Outlet/>
        </_.Mobile>
    )
}

export default Layout