import { useState } from 'react'
import './Tables.css'

import { Table } from "react-bootstrap"

const headers = [
  {
    name: 'Status',
    styles: {
      width: '10px'
    },
  },
  { name: 'Data' },
  { name: 'Horário' },
  {
    name: 'Compromisso'
  },
  {
    name: 'Paciente'
  },
  {
    name: 'Local'
  },
  {
    name: 'Prioridade'
  }
]

const Tables = () => {
  const [body, setBody] = useState([
    {
      id: 1,
      status: true,
      data: '19/02/2023',
      time: '16:00h',
      commitment: 'Consulta Médica',
      patient: '-',
      local: 'Consultório Dra. Fernanda',
      priority: 'Baixa'
    },
    {
      id: 2,
      status: true,
      data: '21/02/2023',
      time: '11:00h',
      commitment: 'Paciente',
      patient: 'Heloisa Baeta',
      local: 'Consultório Centro',
      priority: 'Alta'
    },
    {
      id: 3,
      status: true,
      data: '08/04/2023',
      time: '09:00h',
      commitment: 'Paciente',
      patient: 'Fernanda Lopes',
      local: 'Consultório Rua da Bahia',
      priority: 'Média'
    },
    {
      id: 4,
      status: true,
      data: '16/06/2023',
      time: '08:00h',
      commitment: 'Reunião',
      patient: '-',
      local: 'Consultorio Centro',
      priority: 'Alta'
    },
    {
      id: 5,
      status: true,
      data: '26/06/2023',
      time: '17:00h',
      commitment: 'Compromisso Pessoal',
      patient: '-',
      local: '-',
      priority: 'Média'
    },
    {
      id: 6,
      status: false,
      data: '27/09/2023',
      time: '15:00h',
      commitment: 'Paciente',
      patient: 'Luiz Antonio',
      local: 'Consultório Av. Brail',
      priority: 'Alta'
    }
  ])


  const handleChecked = (id: number) => {
    const newBody = body.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item?.status
        }
      } else {
        return { ...item }
      }
    })
    setBody(newBody)
  }

  return (
    <Table>
      <thead style={{ backgroundColor: '#dddcdc' }}>
        <tr>
          {headers?.map((header) => (
            <th key={header?.name} style={header?.styles}>{header?.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" checked={item?.status} onChange={() => handleChecked(item?.id)} />
            </td>
            <td>{item?.data}</td>
            <td>{item?.time}</td>
            <td>{item?.commitment}</td>
            <td>{item?.patient}</td>
            <td>{item?.local}</td>
            <td>{item?.priority}</td>
          </tr>
        ))}
      </tbody>
    </Table >
  )
}

export default Tables