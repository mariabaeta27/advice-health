/* eslint-disable @typescript-eslint/no-explicit-any */
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import './AddShedule.css'
import { useEffect, useState } from "react";
import { Doctor, Patient, TimeFormated } from "../../types";


const AddShedule = ({ open, setOpen, onSubmit, time, patient, doctors }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: any;
  time: TimeFormated | undefined;
  patient: Patient | undefined;
  doctors: Doctor[] | undefined;
}) => {
  const [absent, setAbsent] = useState(false)

  useEffect(() => {
    setAbsent(false)
  }, [])

  useEffect(() => {
    if (time?.absent) {
      setAbsent(time.absent)
    } else {
      setAbsent(false)
    }
  }, [time])

  return (
    <Offcanvas show={open} onHide={() => {
      setOpen(false)
      setAbsent(false)
    }} placement="end">
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
              defaultChecked={absent || time?.absent}
            />
            <label className="absent-input">Ausente</label>
          </div>
          {(!absent && !time?.absent) && (<>
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="input-form"
              name="name"
              defaultValue={patient?.name}
              disabled={time?.absent || absent}
              required
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
                  disabled={time?.absent}
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
                  disabled={time?.absent}
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
              disabled={time?.absent}
              required
            />
            <label>Procedimento</label>
            <input
              type="text"
              placeholder="Procedimento"
              className="input-form"
              name="service"
              defaultValue={time?.schedule?.procedure}
              disabled={time?.absent}
              required
            />

            <label>Doutor:</label>
            <select id="dropdown" style={{ width: '150px', height: '20px', marginLeft: '5px' }} >
              {doctors?.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
              ))}
            </select>


            <label>Valor</label>

            <p>
              R$
              <input
                type="text"
                placeholder="Valor da consulta"
                className="input-form"
                name="value"
                defaultValue={time?.schedule?.value}
                disabled={time?.schedule ? true : false}
                required
              />
            </p>
          </>)}
          <input type="submit" className="button-form" />
        </form>
      </Offcanvas.Body>
    </Offcanvas >
  )
}

export default AddShedule;