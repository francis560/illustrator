import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


const Contact = () => {

    return (

        <div className="p-8">

            <Head>
                <title>Contact - Mark Rise</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" />
                <link rel="icon" href="/logo.svg" />
            </Head>

            <Navbar />

            <form class="w-full my-24 px-20">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" for="grid-password">
                            Name
                        </label>
                        <input placeholder="Name" class="appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500" id="name" type="text" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" for="grid-password">
                            Email
                        </label>
                        <input placeholder="Email" class="appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500" id="email" type="email" />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2" for="grid-password">
                            Message
                        </label>
                        <textarea class=" no-resize appearance-none block w-full bg-slate-200 text-slate-700 border border-slate-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-500 h-48 resize-none" id="message"></textarea>
                    </div>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3">
                        <button class="bg-slate-900 hover:bg-slate-800 focus:outline-none text-white font-regular py-2 px-6 rounded-md" type="button">
                            Send
                        </button>
                    </div>
                    <div class="md:w-2/3"></div>
                </div>
            </form>

            <Footer />

        </div>

    );

}


export default Contact;