/* eslint-disable @typescript-eslint/no-explicit-any */
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import { Schedule } from "../../types";


const QueryComponent = ({ open, setOpen, query }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  query: Schedule | undefined,

}) => {


  const onSubmit = (form: any) => {
    const { service, value } = form.target
    const bdSchedule = localStorage.getItem('bdSchedule')

    if (bdSchedule) {
      const newSchedule = JSON.parse(bdSchedule)?.map((item: Schedule) => {
        if (item?.id === query?.id) {
          return {
            ...item,
            procedure: service.value,
            value: value.value
          }
        } else {
          return {
            ...item
          }
        }
      })

      if (newSchedule) {
        localStorage.setItem('bdSchedule', JSON.stringify(newSchedule))
      }

    }
  }

  return (
    <Offcanvas show={open} onHide={() => {
      setOpen(false)

    }} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="title-off-canvas">Consulta</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <form onSubmit={onSubmit}>
          <>

            <label>Procedimento</label>
            <input
              type="text"
              placeholder="Procedimento"
              className="input-form"
              name="service"
              defaultValue={query?.procedure}
              required
            />
            <label>Valor</label>
            <p>
              R$
              <input
                type="text"
                placeholder="Valor da consulta"
                className="input-form"
                name="value"
                defaultValue={query?.value}
                required
              />
            </p>
          </>
          <input type="submit" className="button-form" />
        </form>
      </Offcanvas.Body>
    </Offcanvas >
  )
}

export default QueryComponent;