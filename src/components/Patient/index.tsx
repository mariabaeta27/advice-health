/* eslint-disable @typescript-eslint/no-explicit-any */
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import { Patient, Schedule } from "../../types";
import { useEffect, useState } from "react";


const Patient = ({ open, setOpen, query }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  query: Schedule | undefined

}) => {

  const [patient, setPatient] = useState<Patient | undefined>()

  useEffect(() => {
    const bdPatients = localStorage.getItem('bdPatients')

    if (bdPatients) {
      const patients = JSON.parse(bdPatients)
      const newPatient = patients?.filter((item: Patient) => item.id == query?.patientId)
      setPatient(newPatient[0])
    }
  }, [query])

  const onSubmit = (form: any) => {
    const [name, bday, address, document] = form.target
    const bdSchedule = localStorage.getItem('bdSchedule')
    const bdPatients = localStorage.getItem('bdPatients')

    if (bdPatients) {
      const patients = JSON.parse(bdPatients)
      const newPatients = patients?.map((item: Patient) => {
        if (item.id === patient?.id) {
          return {
            ...item,
            name: name.value,
            bday: bday.value,
            document: document.value,
            address: address.value
          }
        } else {
          return { ...item }
        }
      })
      newPatients && localStorage.setItem('bdPatients', JSON.stringify(newPatients))
    }

    if (bdSchedule) {
      const schedule = JSON.parse(bdSchedule)
      const newSchedule = schedule?.map((item: Patient) => {
        if (item.id === query?.id) {
          return {
            ...item,
            patient: name.value
          }
        } else {
          return { ...item }
        }
      })

      localStorage.setItem('bdSchedule', JSON.stringify(newSchedule))
      const newPatient = newSchedule?.filter((item: Patient) => item.id == query?.patientId)

      setPatient(newPatient[0])
    }

  }

  return (
    <Offcanvas show={open} onHide={() => {
      setOpen(false)

    }} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="title-off-canvas">Paciente</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form onSubmit={onSubmit}>
          <>
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="input-form"
              name="name"
              defaultValue={patient?.name}
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
                  required
                />
              </div>
              <div>
                <label>Data de nascimento</label>
                <input
                  type='text'
                  placeholder="Aniversário"
                  className="input-form"
                  name="bday"
                  defaultValue={patient?.bday}
                  required
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
            />
          </>
          <input type="submit" className="button-form" />
        </form>
      </Offcanvas.Body>
    </Offcanvas >
  )
}

export default Patient;