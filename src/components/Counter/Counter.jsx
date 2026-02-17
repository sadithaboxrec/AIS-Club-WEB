import React from 'react'
import { counter } from "../../data/counterdata.js";
import CountUp from "react-countup";
import * as Icons from '@mui/icons-material';

function Counter() {
    return (
        <section className="relative bg-[#f3fbff]">
            <div className="w-full max-w-[1400px] mx-auto px-4 py-4 box-border">

                {/* 4-column grid on desktop, 2-column on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 min-h-[300px] place-items-center text-center">

                    {counter.map((item) => {
                        const IconComponent = Icons[item.icon];
                        return (
                            <div
                                key={item.id}
                                data-aos="zoom-in"
                                className="flex flex-col items-center justify-center px-9 py-[35px] md:p-[35px] md:px-9"
                            >
                                {/* Icon */}
                                <i className="text-[40px] md:text-[48px] text-[#074173] flex items-center justify-center mb-2">
                                    {IconComponent && <IconComponent fontSize="inherit" />}
                                </i>

                                {/* Count number */}
                                <h1 className="text-[30px] md:text-[36px] text-[#e0a80d] font-semibold text-center mb-4 md:mb-[60px]">
                                    <CountUp enableScrollSpy duration={2} end={item.num} />
                                </h1>

                                {/* Title */}
                                <h3 className="font-normal text-[14px] md:text-base text-[#162530]">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Counter;
