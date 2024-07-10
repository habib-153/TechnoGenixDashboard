import { IoMdHome } from "react-icons/io";
import { MdWidgets, MdOutlineFormatAlignRight, MdNotifications, MdOutlineEmojiEmotions, MdEmail, MdOutlineCalendarMonth, MdSpaceDashboard } from "react-icons/md";
import { BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegEdit, FaChartLine, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import { RiUserSharedFill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { useState } from "react";
const options = [
    {
        name: "Overview",
        icon: <IoMdHome/>,
    },
    {
        name: "Widgets",
        icon: <MdWidgets />,
    },
    {
        name: "UI elements",
        icon: <MdOutlineFormatAlignRight />,
    },
    {
        name: "Advance UI",
        icon: <BsFillBarChartFill />,
    },
    {
        name: "Form Elements",
        icon: <AiOutlineBars/>,
    },
    {
        name: "Editor",
        icon: <FaRegEdit />,
    },
    {
        name: "Stats",
        icon: <FaChartLine />,
    },
    {
        name: "Tables",
        icon: <FaTableCells/>,
    },
    {
        name: "Popup",
        icon: <TbMessage2/>,
    },
    {
        name: "Notifications",
        icon: <MdNotifications />,
    },
    {
        name: "Icons",
        icon: <MdOutlineEmojiEmotions />,
    },
    {
        name: "Maps",
        icon: <FaMapMarkerAlt />,
    },
    {
        name: "User Pages",
        icon: <RiUserSharedFill />,
    },
    {
        name: "Error Pages",
        icon: <BiSolidError />,
    },
    {
        name: "E-comers",
        icon: <FaShoppingCart />,
    },
    {
        name: "Emails",
        icon: <MdEmail />,
    },
    {
        name: "Calendar",
        icon: <MdOutlineCalendarMonth />,
    },
    {
        name: "Todo list",
        icon: <LuListTodo />,
    },
    {
        name: "Gallery",
        icon: <GrGallery />,
    },
    {
        name: "Documentation",
        icon: <HiClipboardDocumentList />,
    },
   
]
const Sidebar = () => {
    const [isActive, setActive]= useState(0)
    return (
        <div className="w-full h-[100vh] ">
            <div className="flex flex-col h-full">
                <div className="flex bg-gradient-to-l from-[#E3488A] to-[#C5519C] ">
                    
                    <h1 className="text-2xl flex items-center py-4 mx-auto font-semibold"><MdSpaceDashboard /> Dashboard</h1>
                </div>
                <div className="flex flex-col w-full justify-between pt-6 dark:bg-primary">
                    <ul className="flex flex-col gap-4">
                        {options.map((option, index) => (
                            <li key={index} className="flex" onClick={() => setActive(index)} >
                                {isActive === index && <p className="h-full bg-yellow-400 w-1"></p>}
                                <p className={`flex items-center px-6 py-2 ${isActive === index ? 'text-green-500 font-bold ' : ''}`}>
                                   {option.icon} <span className="ml-2">{option.name}</span> 
                                </p>
                                
                            </li>
                           
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;