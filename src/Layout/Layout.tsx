import { Outlet } from "react-router-dom"
import * as _ from './style';

const Layout = () => {
    return(
        <_.Mobile>
            <_.Void />
            <Outlet/>
        </_.Mobile>
    )
}

export default Layout