import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline"
import './Navbar.css'
import { useEffect, useState } from "react";


const Navbar = ({ open, setOpen, routes }: {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  routes: {
    label: string;
    icon: JSX.Element;
    route: string;

  }[]
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



  return (
    <div>
      <div className="chevron-double">
        {open
          ? <ChevronDoubleRightIcon className="chevron-double-icon" onClick={() => setOpen(!open)} />
          : <ChevronDoubleLeftIcon className="chevron-double-icon" onClick={() => setOpen(!open)} />}
      </div>
      {
        open && (
          <div className="icons">
            {routesSelection?.map((route) => (
              <div
                className="icon d-inline-block"
                style={{ color: route?.selection ? '#4f4d4d' : '#9b9b9b' }}
                onClick={() => setSelection(route)}
              >
                {route.icon}
              </div>
            ))}
          </div>
        )
      }

    </div>
  )
}

export default Navbar