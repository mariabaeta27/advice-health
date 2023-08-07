import Offcanvas from "react-bootstrap/esm/Offcanvas";


const User = ({ open, setOpen }: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  /* eslint-disable @typescript-eslint/no-explicit-any */

}) => {


  return (
    <Offcanvas show={open} onHide={() => {
      setOpen(false)

    }} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="title-off-canvas">Em implementação</Offcanvas.Title>
      </Offcanvas.Header>
      {/* <Offcanvas.Body>
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
          {(!absent && !time?.block) && (<>
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Nome completo"
              className="input-form"
              name="name"
              defaultValue={patient?.name}
              disabled={time?.block || absent}
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
                  disabled={time?.block}
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
                  disabled={time?.block}
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
              disabled={time?.block}
              required
            />
            <label>Procedimento</label>
            <input
              type="text"
              placeholder="Procedimento"
              className="input-form"
              name="service"
              defaultValue={time?.schedule?.subtext}
              disabled={time?.block}
              required
            />
          </>)}
          <input type="submit" className="button-form" />
        </form>
        {
          (!absent && !time?.block && !time?.schedule) && (
            <p className="value">
              <span>
                Valor Pago:
              </span>
              R$100,00
            </p>
          )
        }
      </Offcanvas.Body> */}
    </Offcanvas >
  )
}

export default User;