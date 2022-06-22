import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {

    const [selectedId, setSelectedId] = useState(null);

    const nfts = [
        { uri: "https://markrise.art/wp-content/uploads/2022/06/6-Fishman.jpg", id: 1 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/8-Spaceman.jpg", id: 2 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/14-DJ.jpg", id: 3 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/17-Jungleman.jpg", id: 4 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/18-Birdman.jpg", id: 5 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/19-Peacemake.jpg", id: 6 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/21-Bridge.jpg", id: 7 },
        { uri: "https://markrise.art/wp-content/uploads/2022/06/24-Memories.jpg", id: 8 }
    ];

    return (

        <Fragment>

            <div className="my-24 grid grid-cols-4 gap-6">

                {nfts.map(item => (
                    <motion.img loading="lazy" className="rounded-md cursor-pointer" alt="illustration" key={item.id} src={item.uri} layoutId={item.id} onClick={() => setSelectedId({ id: item.id, uri: item.uri })} />
                ))}

            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div onClick={() => setSelectedId(null)} className="flex items-center justify-center fixed left-0 top-0 w-full h-full bg-slate-900/90" layoutId={selectedId}>
                        <motion.img className="rounded-md w-4/12" src={selectedId.uri} layoutId={selectedId.id} />
                    </motion.div>
                )}
            </AnimatePresence>

        </Fragment>

    );

}


export default Gallery;