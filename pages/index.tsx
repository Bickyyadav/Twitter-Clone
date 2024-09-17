
import { FaTwitter } from "react-icons/fa6";
import {BiHomeCircle} from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

interface TwitterSiderbarButton{
  title: string;
  icon: React.ReactNode; 
}

const sidebarMenuItems: TwitterSiderbarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle/>
  },{
    title: "Explore",
    icon: <FaSearch />
  },{
    title: "Notification",
    icon: <IoIosNotifications />
  },
  {
    title: "Message",
    icon: <FiMessageSquare />
  },
  {
    title: "BookMark",
    icon: <CiBookmark />
  },
  {
    title: "Profile",
    icon: <CgProfile />
  }
]


export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-60">
        <div className=" col-span-3   pt-8">
          <div className="text-4xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all w-fit  ">
          <FaTwitter />
          </div>
          <div className="mt-4 text-2xl font-bold">
            <ul>
            {sidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full p-5 w-fit cursor-pointer " key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li> 
              ))}
              </ul>
              <div className="mt-5 px-5">
              <button className=" bg-[#1d9bf0]  hover:bg-gray-800 rounded-full p-5 w-full cursor-pointer">Tweet</button>
          </div>
          </div>
        </div>
        <div className="col-span-6  border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  )
}
