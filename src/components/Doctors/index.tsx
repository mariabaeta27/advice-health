
import './DoctorCard.css'
import { Card } from "react-bootstrap";
import { Doctor } from "../../types";
import { UserCircleIcon } from "@heroicons/react/24/outline";


const DoctorCard = ({ doctor }: {
  doctor: Doctor
}) => {

  return (
    <div key={doctor?.id} className="doctors">
      <div>
        <Card className={'doctor-card'}>
          {<UserCircleIcon />}
        </Card>
      </div>
      <div className="doctor-text">
        <div>
          <h4>{doctor.name}</h4>
        </div>
        <div>
          <p> {doctor.specialty}</p>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard