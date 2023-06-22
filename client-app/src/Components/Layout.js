import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="l-app">
            <Outlet />
        </main>
    )
}

export default Layout;