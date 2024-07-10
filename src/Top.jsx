import { useState } from 'react';
import ChartComponent from './Line';
import { IoWalletSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";

import Example from './PiChart';
const stats = [
    {
        icon: <IoWalletSharp />,
        iconColor: "#E3488A",
        title: "Wallet Balance",
        num: "$3567.54"
    },
    {
        icon: <IoWalletSharp />,
        iconColor: "#9A52DA",
        title: "Referral Earning",
        num: "$1567.54"
    },
    {
        icon: <FaWallet />,
        iconColor: "#9A52DA",
        title: "Estimated Sales",
        num: "$2663.54"
    },
    {
        icon: <FaWallet />,
        iconColor: "#53AEE7",
        title: "Earning",
        num: "$53567.54"
    },
]
const Top = () => {
    const [active, setActive] = useState(0)
    return (

        <div className='flex gap-2'>
            <div>
                <div className='dark:bg-primary flex p-3 pl-4  rounded-2xl'>
                    <div className='pt-4'>
                        <h4>Dashboard</h4>
                        <p>Overview of the latest months</p>
                        <div className='text-start'>

                            <h2 className='text-4xl mt-5'>$6286.25</h2>
                            <p> Current months earning</p>
                            <h2 className='text-4xl mt-5 '>82</h2>
                            <p>Current months sales</p>
                            <button className='bg-gradient-to-l from-[#E3488A] to-[#C5519C] rounded-2xl mt-5 text-sm px-3 py-3'>
                                Last Month Summary
                            </button>
                        </div>

                    </div>
                    <div>
                        <div className='flex  mx-auto justify-center gap-5 '>
                            <p onClick={() => setActive(0)}
                                className={`${active === 0 ? "text-green-500 underline " : "text-white/60"} uppercase `}>Daily</p>
                            <p onClick={() => setActive(1)} className={`${active === 1 ? "text-green-500 underline " : "text-white/60"} uppercase `}>weekly</p>
                            <p onClick={() => setActive(2)} className={`${active === 2 ? "text-green-500 underline " : "text-white/60"} uppercase `}>monthly</p>
                            <p onClick={() => setActive(3)} className={`${active === 3 ? "text-green-500 underline " : "text-white/60"} uppercase `}>yearly</p>
                            <div>
                                <div className="flex gap-3 items-center">

                                    <span className="h-2 w-2 rounded-full bg-green-500 "></span>
                                    <p>Online</p>
                                    <span className="h-2 w-2 rounded-full bg-yellow-500 "></span>
                                    <p>Store</p>
                                </div>
                            </div>
                        </div>
                        <ChartComponent />
                    </div>

                </div>
                <div className='flex dark:bg-primary mt-1 rounded-xl'>
                    {
                        stats.map((item, index) => {
                            return (
                                <div className='flex gap-3 px-3  py-3 text-center' key={index}>
                                    <div className='flex  items-center '>
                                        <div className={``}>
                                            <div className={`p-2 rounded-full `} style={{ backgroundColor: item.iconColor }}>{item.icon}</div>
                                        </div>


                                    </div>
                                    <div className='text-start'>

                                        <h3 className='text-white/60 text-sm'>{item.title}</h3>
                                        <h2 className='font-bold'>{item.num}</h2>
                                    </div>

                                </div>)
                        })
                    }
                </div>
            </div>
            <div className='bg-primary rounded-2xl'>
                <p className='text-start p-3'>Traffic</p>
                <Example />
                <div className='flex justify-around '>
                    <div>
                        <h1 className='text-3xl'>33%</h1>
                        <div className='flex gap-1 items-center'>
                            <span className='w-2 h-2 rounded-full bg-[#9A52DA]'></span>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl'>55%</h1>
                        <div className='flex gap-1 items-center'>
                            <span className='w-2 h-2 rounded-full bg-red-500'></span>
                            <p>Youtube</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl'>12%</h1>
                        <div className='flex gap-1 items-center'>
                            <span className='w-2 h-2 rounded-full bg-[#0466C2]'></span>
                            <p>Direct Search</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Top;