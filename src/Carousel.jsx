import React, {useState} from 'react'
import { newsStories } from './staticData/storyData';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion"
import NewsCard from "./NewsCard"

function Carousel(props) {
    const [cardIndex, setCardIndex] = useState(0);

    const handleNewsClick = () => {
        alert('News Page Coming')
    }

    const handleIncreaseNews = () => {
        const maxLength = newsStories.length - 1;
        if (cardIndex != maxLength) {
            setCardIndex(cardIndex + 1)
        }

    }

    const handleDecreaseNews = () => {
        if (cardIndex != 0) {
            setCardIndex(cardIndex - 1)
        }
    }
    return (
        <div ref={props.targetRef} className='w-full bg-gray-100 pt-20 pb-16 px-2.5 md:px-4'>
            <div className='max-w-[1240px] mx-auto flex'>
                <div className='flex mt-10 sm:mt-20 md:mt-0 flex-col md:flex-col justify-center items-center align-middle'>
                    <p className='text-center text-xl font-bold pb-3'>Latest News</p>
                    <div className="hidden md:flex">
                        {newsStories.length > 0 ? <div className='relative w-[900px] h-[610px]'>
                            {newsStories.length - 1 > cardIndex ?

                                <motion.div initial={{ opacity: .5 }} animate={{ opacity: 1 }} exit={{ opacity: .5 }} transition={{ ease: 'easeInOut', duration: 1 }}>
                                    <NewsCard position="right" story={newsStories[cardIndex + 1]} />
                                </motion.div>
                                : <div></div>}
                            {cardIndex != 0 ?

                                <motion.div initial={{ opacity: .5 }} animate={{ opacity: 1 }} exit={{ opacity: .5 }}>
                                    <NewsCard position="left" story={newsStories[cardIndex - 1]} />
                                </motion.div>
                                : <div></div>}
                            {newsStories.map((story, index) => {
                                if (index === cardIndex) {
                                    return (
                                        <motion.div key={index} initial={{ opacity: .5 }} animate={{ opacity: 1 }} exit={{ opacity: .5 }}>
                                            <NewsCard touch="false" key={index} position="center" story={story} />
                                        </motion.div>
                                    )
                                }
                            })
                            }
                        </div> : <p>No news stories have been created. </p>}
                    </div>
                    <div className=' pt-5 hidden md:block'>
                    <IconButton onClick={handleDecreaseNews} className=' text-red-600 hover:text-blue-600 border-transparent bg-transparent hover:bg-transparent'>
                        <FiChevronLeft size={30} />
                    </IconButton>
                    <IconButton onClick={handleIncreaseNews} className=' text-red-600 hover:text-blue-600 border-transparent bg-transparent hover:bg-transparent'>
                        <FiChevronRight size={30} />
                    </IconButton>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel