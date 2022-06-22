import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {

    const [selectedId, setSelectedId] = useState(null);

    const abstract = [
        { uri: "https://markrise.art/wp-content/uploads/2022/06/faces.jpg", id: 1 },
        { uri: "https://markrise.art/wp-content/uploads/2021/08/urban.jpg", id: 2 },
        { uri: "https://markrise.art/wp-content/uploads/2021/11/day63.jpg", id: 3 },
        { uri: "https://markrise.art/wp-content/uploads/2022/03/day-88-insta.jpg", id: 4 },
        { uri: "https://markrise.art/wp-content/uploads/2022/03/Day-87-Insta.jpg", id: 5 },
        { uri: "https://markrise.art/wp-content/uploads/2021/12/1600.jpg", id: 6 },
        { uri: "https://markrise.art/wp-content/uploads/2022/02/1600-1.jpg", id: 7 },
        { uri: "https://markrise.art/wp-content/uploads/2021/11/800-2.jpg", id: 8 },
        { uri: "https://markrise.art/wp-content/uploads/2022/02/800-5.jpg", id: 9 },
        { uri: "https://markrise.art/wp-content/uploads/2022/01/800-5.jpg", id: 10 },
        { uri: "https://markrise.art/wp-content/uploads/2021/12/800-3.jpg", id: 11 },
        { uri: "https://markrise.art/wp-content/uploads/2022/02/800-4.jpg", id: 12 },
        { uri: "https://markrise.art/wp-content/uploads/2022/01/800-1.jpg", id: 13 },
        { uri: "https://markrise.art/wp-content/uploads/2022/01/800-3.jpg", id: 14 },
        { uri: "https://markrise.art/wp-content/uploads/2022/02/800-6.jpg", id: 15 }
    ];

    return (
        <Fragment>

            <div className="my-24 grid grid-cols-2 md:grid-cols-4 gap-6">

                {abstract.map(item => (
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