import { ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { useEffect } from "react"
import { api } from "../../../utils/axios"
import { Link } from "react-router-dom"

const SidebarContext = createContext()

export default function SidebarComponent({ children }) {
  const [expanded, setExpanded] = useState(false)

  var urlSite = '';
  var urlImage = 'logo-f4u.png';

  useEffect(()=> {
    if(localStorage.getItem('userData') != null ){
      urlSite = JSON.parse(localStorage.getItem('userData')).urlSite;
      if(urlSite) {
        api.get(`/${urlSite}`).then((response)=> {
        urlImage = response.image
      })
      }
    }

  },[]);
  
  return (
    <aside style={{height: '200vh'}}>
      <nav className="h-full inline-flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={`/${urlImage}`}
            className={`overflow-hidden transition-all ${
              expanded ? "w-52" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, directory}) {
  const { expanded } = useContext(SidebarContext)

  var urlSite = '';

  useEffect(()=> {
    if(localStorage.getItem('userData') != null ){
      urlSite = JSON.parse(localStorage.getItem('userData')).urlSite;
    }

  },[]);
  
  return (
    <Link to={`${urlSite + directory}`}>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active == "true"
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}>
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>


      </li>
    </Link>
  )
}