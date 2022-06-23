import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const About = () => {
    
    return (

        <div className="p-4 md:p-8">

            <Head>
                <title>About - Mark Rise</title>
                <meta name="description" content="Generated by create next app" />
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css' />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Navbar />

            <div className="flex flex-col-reverse px-0 sm:px-14 lg:px-0 lg:flex-row lg:justify-around my-24">

                <img className="rounded-md mt-14 lg:mt-0 lg:w-1/2" src="https://markrise.art/wp-content/uploads/2021/01/markrisephoto-768x857.jpg" alt="image profile" />

                <div className="flex flex-col lg:px-10">
                    <h1 className="font-bold text-slate-900 text-4xl mb-4">My biography is not as fascinating as the moment in which I create. All is there.</h1>

                    <p className="font-regular text-gray-500 text-lg mb-4">My life is dedicated to the art, my family, and all those who follow my work. Everything makes sense when we give joy and love equally to ourselves and others.</p>

                    <p className="font-regular text-gray-500 text-lg mb-8">Because of that, here I will record everything that makes my life worthwhile and inspire all those who want the same for themselves. Art is a world in which we shape our character and everyday life. Every breath is worth as much as we enjoy art. So let’s together create a life worth living.</p>

                    <p className="font-regular text-gray-500 text-lg">Love to you.</p>
                    <p className="font-semibold text-gray-500 text-lg">Mark Rise</p>
                </div>

            </div>

            <Footer />

        </div>

    );

}


export default About;