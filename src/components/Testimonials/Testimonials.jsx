import React, { useState, useEffect } from 'react';
import { testimonialsData } from '../../data/testimonialsdata.js';

function Testimonials() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [testimonialsData.length]);

    const current = testimonialsData[index];

    return (
        <div className="
            relative overflow-hidden
            flex flex-col justify-center items-center
            bg-white w-full text-center
            px-4 py-8
            font-[poppins,sans-serif]
            transition-all duration-200 linear
            before:content-[''] before:absolute before:w-[20vw] before:h-[20vw]
            before:opacity-[0.08] before:border-4 before:border-[#f14f4f]
            before:rounded-full before:left-[-8vw] before:top-[-5vh]
            after:content-[''] after:absolute after:w-[20vw] after:h-[20vw]
            after:opacity-[0.08] after:border-4 after:border-[#f14f4f]
            after:rounded-full after:right-[-5vw] after:bottom-[-8vw]
        ">

            {/* Section Header */}
            <header className="text-[40px] md:text-[48px] capitalize font-semibold pb-8 md:pb-8 text-[#162530] tracking-wide">
                What our Alumni Say
            </header>

            {/* Feedback Card */}
            <div className="flex flex-col items-center">

                {/* Review Content Box */}
                <div className="border-[5px] border-[#e9e9ec] bg-[#FFFCFB] max-w-[900px]">

                    {/* Review Text with curly quotes via CSS pseudo */}
                    <div className="
                        relative
                        px-2 py-8 md:py-8
                        max-w-full w-full mx-auto
                        text-[#5f5f5f]
                        text-[13px] md:text-[1rem]
                        leading-[24px] md:leading-[1.8rem]
                        h-[248px] md:h-[260px]
                        overflow-hidden
                        [display:-webkit-box] [-webkit-box-orient:vertical]
                        before:content-['\275B\275B'] before:text-[32px] before:text-[#f14f4f] before:mx-1
                        after:content-['\275C\275C'] after:text-[32px] after:text-[#f14f4f] after:mx-1
                    ">
                        {current.message}
                    </div>

                    {/* Author Name */}
                    <div className="text-[19.2px] md:text-[24px] pt-2 text-[#f14f4f] font-semibold">
                        {current.author}
                    </div>

                    {/* Job Title */}
                    <div className="text-[#787878] pb-4">
                        {current.job}
                    </div>
                </div>

                {/* Avatar Selector */}
                <div className="pt-8 md:pt-12">
                    {testimonialsData.map((entry, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className="inline-block m-2 bg-transparent border-none cursor-pointer group"
                        >
                            <img
                                src={entry.image}
                                alt={entry.author}
                                className={`
                                    w-16 h-16 md:w-20 md:h-20
                                    object-cover rounded-full p-1
                                    border-2 border-[#dddddd]
                                    grayscale transition-all duration-300
                                    ${i === index
                                        ? 'border-[#f14f4f] grayscale-0 scale-100 shadow-[0_8px_16px_#f14f4f40]'
                                        : 'scale-[0.8] md:scale-[0.8] hover:border-[#f14f4f] hover:grayscale-0 hover:scale-100 hover:shadow-[0_8px_16px_#f14f4f40]'
                                    }
                                `}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
