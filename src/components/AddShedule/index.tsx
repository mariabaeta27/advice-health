import Offcanvas from "react-bootstrap/esm/Offcanvas";
import './AddShedule.css'
import { useEffect, useState } from "react";
import { Patient, Time } from "../../types";


const AddShedule = ({ open, setOpen, onSubmit, time, patient }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onSubmit: any
  time: Time | undefined,
  patient: Patient | undefined
}) => {
  const [absent, setAbsent] = useState(false)

  useEffect(() => {
    if (time?.block) {
      setAbsent(time.block)
    }
  }, [])

  return (
    <Offcanvas show={open} onHide={() => setOpen(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="title-off-canvas">Agendar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form onSubmit={onSubmit}>
          <div className="absent">
            <input
              type='checkbox'
              onChange={() => setAbsent(!absent)}
              name="absent"
              defaultChecked={time?.block}
            />
            <label className="absent-input">Ausente</label>
          </div>
          <>
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="input-form"
              name="name"
              defaultValue={patient?.name}
              disabled={time?.block || absent}
            />
            <div className="personl-data">
              <div>
                <label>CPF</label>
                <input
                  type="text"
                  placeholder="CPF"
                  className="input-form"
                  name="cpf"
                  defaultValue={patient?.document}
                  disabled={time?.block || absent}
                />
              </div>
              <div>
                <label>Data de nascimento</label>
                <input
                  type='date'
                  placeholder="Aniversário"
                  className="input-form"
                  name="bday"
                  // value={patient?.bday && new Date(patient?.bday)}
                  disabled={time?.block || absent}
                />
              </div>
            </div>
            <label>Endereço</label>
            <input
              type="text"
              placeholder="Endereço"
              className="input-form"
              name="address"
              defaultValue={patient?.address}
              disabled={time?.block || absent}
            />
            <label>Procedimento</label>
            <input
              type="text"
              placeholder="Procedimento"
              className="input-form"
              name="service"
              defaultValue={time?.schedule?.subtext}
              disabled={time?.block || absent}
            />
          </>

          <input type="submit" className="button-form" />
        </form>
      </Offcanvas.Body>
    </Offcanvas >
  )
}

export default AddShedule;