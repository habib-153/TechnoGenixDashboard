import { MdOutlineWaves } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { PiWaveformBold } from "react-icons/pi";
import { RxBarChart } from "react-icons/rx";
const Middle = () => {
    return (
        <div className="flex justify-between mt-3 ">
            <div className="w-56 rounded-2xl  gap-3  h-32 flex bg-gradient-to-l from-[#E3488A] to-[#C5519C] p-2 items-center justify-between">
                <div className="text-start">
                    <p className="text-sm">
                        Revenue Status
                    </p>
                    <MdOutlineWaves size={60} className="pl-2" />
                </div>
                <div className="text-center items-center">
                    <h2 className="text-2xl">$432</h2>
                    <p className="text-sm">Jan 1 - Jan 10</p>
                </div>
            </div>
            <div className="w-56 rounded-2xl  gap-3  h-32 flex bg-gradient-to-l from-[#9A52DA] to-[#432199] p-2 items-center justify-between">
                <div className="text-start">
                    <p className="text-sm">
                        Page view
                    </p>
                    <FaUsersViewfinder size={60} className="pl-2" />
                </div>
                <div className="text-center items-center">
                    <h2 className="text-2xl">$432</h2>
                    <p className="text-sm">Jan 1 - Jan 10</p>
                </div>
            </div>
            <div className="w-56 rounded-2xl  gap-3  h-32 flex bg-gradient-to-l from-[#53AEE7] to-[#0466C2] p-2 items-center justify-between">
                <div className="text-start">
                    <p className="text-sm">
                        Bonus Rate
                    </p>
                    <h2 className="text-2xl">$432</h2>
                    <select name="" id="" className="rounded-lg bg-white/50">
                        <option value="1">monthly</option>
                    </select>
                </div>
                <div className="text-center items-center">
                    
                    <PiWaveformBold size={70} className="" />
                </div>
            </div>
            <div className="w-56 rounded-2xl  gap-3  h-32 flex bg-gradient-to-l from-[#E3488A] to-[#C5519C] p-2 items-center justify-between">
                <div className="text-start">
                    <p className="text-sm">
                        Revenue Status
                    </p>
                    <RxBarChart size={60} className="pl-2" />
                </div>
                <div className="text-center items-center">
                    <h2 className="text-2xl">$432</h2>
                    <p className="text-sm">Jan 1 - Jan 10</p>
                </div>
            </div>
        </div>
    );
};

export default Middle;