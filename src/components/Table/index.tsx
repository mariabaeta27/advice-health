import { useState } from 'react'
import './Tables.css'

import { Table } from "react-bootstrap"
const Tables = ({ headers, bodyTable }: {
  headers: ({
    name: string;
    styles: {
      width: string;
    };
  } | {
    name: string;
    styles?: undefined;
  })[];
  bodyTable: {
    id: number;
    status: boolean;
    data: string;
    time: string;
    commitment: string;
    patient: string;
    local: string;
    priority: string;
  }[]

}) => {
  const [body, setBody] = useState(bodyTable)


  const handleChecked = (id: number) => {
    const newBody = body?.map((item) => {
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
          {headers?.map((header: {
            name: string;
            styles: {
              width: string;
            };
          } | {
            name: string;
            styles?: undefined;
          }) => (
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