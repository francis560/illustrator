import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Gallery = () => {

    const [selectedId, setSelectedId] = useState(null);

    const minimal = [
        {uri: "https://markrise.art/wp-content/uploads/2022/01/800.jpg", id: 1},
        {uri: "https://markrise.art/wp-content/uploads/2021/12/800-4.jpg", id: 2},
        {uri: "https://markrise.art/wp-content/uploads/2022/02/800.jpg", id: 3},
        {uri: "https://markrise.art/wp-content/uploads/2021/11/800-3.jpg", id: 4},
        {uri: "https://markrise.art/wp-content/uploads/2021/11/64cover.jpg", id: 5},
        {uri: "https://markrise.art/wp-content/uploads/2021/09/1600-1.jpg", id: 6},
        {uri: "https://markrise.art/wp-content/uploads/2021/08/Day-57.jpg", id: 7},
        {uri: "https://markrise.art/wp-content/uploads/2021/04/day-9-1.jpg", id: 8},
        {uri: "https://markrise.art/wp-content/uploads/2021/04/day-10.jpg", id: 9},
        {uri: "https://markrise.art/wp-content/uploads/2021/04/1600-2.jpg", id: 10},
        {uri: "https://markrise.art/wp-content/uploads/2021/07/1200-2.jpg", id: 11},
        {uri: "https://markrise.art/wp-content/uploads/2021/03/day2.jpg", id: 12},
        {uri: "https://markrise.art/wp-content/uploads/2021/05/1200-2.jpg", id: 13},
        {uri: "https://markrise.art/wp-content/uploads/2021/05/1200-6.jpg", id: 14},
        {uri: "https://markrise.art/wp-content/uploads/2021/05/1200-5.jpg", id: 15},
        {uri: "https://markrise.art/wp-content/uploads/2021/05/1600-6.jpg", id: 16},
        {uri: "https://markrise.art/wp-content/uploads/2021/06/1200.jpg", id: 17},
        {uri: "https://markrise.art/wp-content/uploads/2021/07/1600-2.jpg", id: 18},
        {uri: "https://markrise.art/wp-content/uploads/2021/08/1200.jpg", id: 19},
        {uri: "https://markrise.art/wp-content/uploads/2021/08/Day-55.jpg", id: 20}
    ];

    return (
        <Fragment>

            <div className="my-24 grid grid-cols-2 md:grid-cols-4 gap-6">

                {minimal.map(item => (
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