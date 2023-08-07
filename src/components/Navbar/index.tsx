import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline"
import './Navbar.css'
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Routes as RoutesTypes } from "../../types";


const Navbar = ({ open, setOpen, routes }: {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  routes: RoutesTypes[]

}) => {
  const [selection, setSelection] = useState(routes[0])
  const [routesSelection, setRoutesSelection] = useState<{
    selection: boolean;
    label: string;
    icon: JSX.Element;
    route: string;
  }[]>()

  useEffect(() => {
    const newRoutes = routes?.map((route) => {
      if (route.label === selection.label) {
        return {
          ...route,
          selection: true
        }
      } else {
        return {
          ...route,
          selection: false
        }
      }
    })
    setRoutesSelection(newRoutes)

  }, [selection, routes])

  const handleSelection = (route: {
    selection: boolean;
    label: string;
    icon: JSX.Element;
    route: string;
  }) => {
    setSelection(route)
  }


  return (
    <div>
      <div className="chevron-double">
        {open
          ? <ChevronDoubleLeftIcon className="chevron-double-icon" onClick={() => setOpen(!open)} />
          : <ChevronDoubleRightIcon className="chevron-double-icon" onClick={() => setOpen(!open)} />}
      </div>
      {
        open && (
          <div className="icons">
            {routesSelection?.map((route) => (
              <div
                key={route.label}
                className="icon d-inline-block"
                onClick={() => handleSelection(route)}
              >
                <NavLink style={{ color: route?.selection ? '#4f4d4d' : '#dddcdc' }} to={route.route}>
                  {route.icon}
                </NavLink>
              </div>
            ))}
          </div>
        )
      }

    </div>
  )
}

export default Navbar