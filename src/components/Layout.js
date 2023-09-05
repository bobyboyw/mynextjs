import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }){
    return(
        <>
        <Header />
        <main className="max-w-screen-xl mx-auto mt-20 p-4">
            {children}
        </main>
        <Footer />
        </>
    )
}