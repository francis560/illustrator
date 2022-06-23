import Head from "next/head";
import Gallery from "../components/minimal-illustrations/gallery";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const MinimalIllustrations = () => {

    return (
        
        <div className="p-4 md:p-8">

            <Navbar />

            <Head>
                <title>Flat Design Illustrations - Mark Rise</title>
                <meta name="description" content="Generated by create next app" />
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css' />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <div className="bg-cover-minimal-illustrations h-screen rounded-t-md bg-fixed"></div>
            <div className="rounded-b-md p-4 bg-black">
                <p className="font-medium text-lg text-center text-amber-400">MINIMAL ILLUSTRATIONS</p>
            </div>

            <Gallery />

            <Footer />

        </div>

    );

}


export default MinimalIllustrations;