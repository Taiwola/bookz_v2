import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";



interface Props {
    children: React.ReactNode;
}
const Layout = ({children}: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="py-10 flex-1">
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout