import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {

    const [selectedId, setSelectedId] = useState(null);

    const prints = [
        {uri: "https://markrise.art/wp-content/uploads/2022/06/covers_0002_Layer-4.jpg", id: 1},
        {uri: "https://markrise.art/wp-content/uploads/2022/06/covers_0003_Layer-3.jpg", id: 2},
        {uri: "https://markrise.art/wp-content/uploads/2022/06/covers_0004_Layer-2.jpg", id: 3},
        {uri: "https://markrise.art/wp-content/uploads/2022/06/covers_0005_Layer-1.jpg", id: 4}
    ];

    return (

        <Fragment>

            <div className="my-24 grid grid-cols-2 md:grid-cols-4 gap-6">

                {prints.map(item => (
                    <motion.img whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                    }} loading="lazy" className="rounded-md cursor-pointer" alt="illustration" key={item.id} src={item.uri} layoutId={item.id} onClick={() => setSelectedId({ id: item.id, uri: item.uri })} />
                ))}

            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div onClick={() => setSelectedId(null)} className="flex z-40 items-center justify-center fixed left-0 top-0 w-full h-full bg-slate-900/90" layoutId={selectedId}>
                        <motion.img className="rounded-md w-4/5 md:w-4/12" src={selectedId.uri} layoutId={selectedId.id} />
                    </motion.div>
                )}
            </AnimatePresence>

        </Fragment>


    );

}


export default Gallery;