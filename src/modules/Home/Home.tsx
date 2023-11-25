import Footer from "~/components/Footer/Footer";
import Header from "~/components/Header/Header";

import Hero from "../Hero/Hero";

export default function Home(){
    return (
        <div className="h-full flex items-center px-6 lg:px-32 text-white">
            <Header/>
            <Hero/>
            <Footer/>
        </div>
    )
}