import './Tables.css'

import { Table } from "react-bootstrap"
import { HeadersTable } from '../../types';
const Tables = ({ headers, bodyTable, columns }: {
  headers: HeadersTable[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  bodyTable: any
  columns: string[]
}) => {



  return (
    <>
      <Table>
        <thead style={{ backgroundColor: '#dddcdc' }}>
          <tr>
            {headers?.map((header: HeadersTable) => (
              <th
                key={header?.name}
                style={header?.styles}
                scope="col"
              >
                {header?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyTable.map((item: any) => (
            <tr key={item.id}>
              {columns.map((col: string, index: number) => (
                <td key={index}>
                  {item[col]?.children}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table >
      {
        bodyTable.length === 0 && (
          <div className="text-center">
            <h6 className="m-3 pb-4 text-gray-700">
              Nenhum registro correspondente encontrado
            </h6>
          </div>
        )
      }
    </>

  )
}

export default Tables