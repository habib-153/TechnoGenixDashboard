import { FiAlignJustify } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Navbar = () => {
    return (
        <div className="flex justify-between w-full h-16 text-xl p-3 items-center dark:bg-primary">
            <FiAlignJustify />
            <div className="flex gap-4">
                
                <div className="relative">
                    <IoNotifications />
                    <span className="h-2 w-2 rounded-full bg-red-700 absolute -top-0"></span>
                </div>
                <div className="relative">
                    <MdEmail />
                    <span className="h-2 w-2 rounded-full bg-red-700 absolute -top-0"></span>
                </div>
               

                <FaRegUserCircle />
                <IoSettings />

            </div>
        </div>
    );
};

export default Navbar;