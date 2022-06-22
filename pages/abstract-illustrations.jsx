import Head from "next/head";
// import Gallery from "../components/minimal-cover/gallery";


const AbstractIllustrations = () => {

    return (
        
        <div className="p-8">

            <Head>
                <title>Illustrator</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-cover-abstract-illustrations h-screen rounded-t-md bg-fixed"></div>
            <div className="rounded-b-md p-4 bg-black">
                <p className="font-medium text-lg text-center text-amber-400">ABSTRACT ILLUSTRATIONS</p>
            </div>

            

        </div>

    );

}


export default AbstractIllustrations;