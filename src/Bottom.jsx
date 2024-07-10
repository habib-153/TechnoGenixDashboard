import { HiMiniCheckCircle } from "react-icons/hi2";
import { PiHandshakeBold } from "react-icons/pi";
import { GrArticle, GrNext, GrPrevious } from "react-icons/gr";
import { BiSolidEditLocation } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa6";
import { IoMdDocument } from "react-icons/io";
import { MdOutlineAlarmAdd, MdDelete, MdError } from "react-icons/md";
const recent = [
    {
        time: '40 minutes ago',
        title: "Task Updated",
        description: 'Nicolai updated a task',
        icon: <HiMiniCheckCircle />,
        iconColor: "#E3488A"
    },
    {
        time: '1 hour ago',
        title: "Deal Added",
        description: 'Parsi updated a task',
        icon: <PiHandshakeBold />,
        iconColor: "#5C33A9"
    },
    {
        time: '40 minutes ago',
        title: "Published Article",
        description: 'Sanshi updated an article',
        icon: <GrArticle />,
        iconColor: "#53AEE7"
    },
    {
        time: '1 dat ago',
        title: "Dock Updated",
        description: 'Manshi updated a dock',
        icon: <BiSolidEditLocation />,
        iconColor: "#FB9E3E"
    },
    {
        time: '1 day ago',
        title: "Replied comment",
        description: 'Fanshi updated a comment',
        iconColor: "#59F561",
        icon: <FaRegComments />
    },
]
const table = [
    {
        invoice: "12386",
        from: "Russia",
        customer: "John Doe",
        status: "Process",
        price: "$1567",
        statusColor: "#E3488A"
    },
    {
        invoice: "12386",
        from: "Russia",
        customer: "John Doe",
        status: "Open",
        price: "$1567",
        statusColor: "#5C33A9"
    },
    {
        invoice: "12386",
        from: "Russia",
        customer: "John Doe",
        status: "On Hold",
        price: "$1567",
        statusColor: "#53AEE7"
    },
    {
        invoice: "12386",
        from: "Russia",
        customer: "John Doe",
        status: "Process",
        price: "$1567",
        statusColor: "#FB9E3E"
    },
    {
        invoice: "12386",
        from: "Russia",
        customer: "John Doe",
        status: "Open",
        price: "$1567",
        statusColor: "#59F561"
    },
]
const Bottom = () => {
    return (
        <div className="flex gap-2 mt-5">
            <div className="w-2/5 dark:bg-primary p-5 text-start rounded-2xl">
                <h4>Recent Activities</h4>
                <div>
                    {
                        recent.map((item, index) => (
                            <div key={index} className="flex gap-3 justify-between items-center align-middle p-2 ">
                                <div className="flex justify-between w-1/2">
                                    <p className="text-sm text-white/60">{item.time}</p>
                                    <div className={`h-9 w-9 rounded-full flex items-center text-center text-2xl p-2`} style={{ backgroundColor: item.iconColor }}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="w-1/2 pl-3">

                                    <p className="">{item.title}</p>
                                    <p className="text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="dark:bg-primary p-4 rounded-2xl text-start">
                <h4>Other Status</h4>
                <p className="text-white/60">
                    Overview of last month
                </p>
                <div className="flex gap-3 justify-between items-center p-5">
                    <div className="flex gap-2">
                        <button className="flex bg-[#EA5757] items-center gap-1"><MdOutlineAlarmAdd /> Add</button>
                        <button className="p-2 text-3xl bg-white/50"><MdDelete /> </button>
                        <button className="p-2 text-3xl bg-white/50"><MdError /> </button>
                        <button className="p-2 text-3xl bg-white/50"><IoMdDocument /> </button>
                    </div>
                    <div className="flex gap-2 justify-end ">
                        <input type="text" name="" id="" placeholder="Search" className="py-1 px-2 h-12 w-2/3 bg-white/50 text-white rounded" />
                        <button className="p-2 text-3xl bg-white/50"><IoMdDocument /> </button>
                    </div>
                </div>
                <div>
                    <table className="w-full text-center items-center ">
                        <thead>
                            <tr className="  ">
                                <th>Invoice</th>
                                <th>Customer</th>
                                <th>From</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                table.map((item, index) => (
                                    <tr key={index} className=" " >
                                        <td>{item.invoice}</td>
                                        <td>{item.customer}</td>
                                        <td>{item.from}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button className="w-[102px]" style={{ backgroundColor: item.statusColor }}>
                                                {item.status}
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>
                 <div className="flex justify-between mt-4">
                <p className="text-white/60">
                    Showing 1 out of 20 entries
                </p>
                <div className="flex justify-center space-x-1 dark:text-gray-800">
                    <p title="previous" type="p" className="inline-flex items-center justify-center w-8 h-8 py-0 text-white/60 dark:bg-primary">
                            <GrPrevious />
                    </p>
                    <p type="p" title="Page 1" className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded-full  dark:bg-primary text-white/60 dark:border-primary">1</p>
                        <p type="p" className="inline-flex items-center justify-center w-8 h-8 py-0 text-white/60 rounded-full dark:bg-[#EA5757]" title="Page 2">2</p>
                    <p type="p" className="inline-flex items-center justify-center w-8 h-8 py-0 text-white/60 dark:bg-primary" title="Page 3">3</p>
                    <p type="p" className="inline-flex items-center justify-center w-8 h-8 py-0 text-white/60 dark:bg-primary" title="Page 4">4</p>
                        <p title="next" type="p" className="inline-flex items-center justify-center w-8 h-8 py-0 text-white/60 dark:bg-primary">
                            <GrNext />
                    </p>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Bottom;