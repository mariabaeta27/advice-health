/* eslint-disable @typescript-eslint/no-explicit-any */
import './Quey.css'
import { Patient, QueryComponent, Search, Tables } from "../../components"
import { headersTableQuery } from "../../constants"
import { useEffect, useState } from "react"
import { FunnelIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/20/solid'

import { Schedule } from '../../types'

const Query = () => {

  const cols = ['answered', 'patitent', 'date', 'time', 'doctor', 'value', 'procedure', 'icon']

  const [nativeBody, setNativeBody] = useState<any>()
  const [filterBody, setFilterBody] = useState<any>()
  const [viewFilters, setViewFilters] = useState(false)
  const [advcancedFilter, setAdvcancedFilter] = useState<string | undefined>()
  const [open, setOpen] = useState(false)
  const [openQuery, setOpenQuery] = useState(false)
  const [query, setQuey] = useState<Schedule | undefined>()

  const getData = () => {
    const bdSchedule = localStorage.getItem('bdSchedule')
    setNativeBody(bdSchedule && JSON.parse(bdSchedule))
    setFilterBody(bdSchedule && JSON.parse(bdSchedule))
  }

  useEffect(() => {
    getData()
  }, [])

  const handleQuery = (e: string) => {
    const newBody = nativeBody.filter((b: any) => {
      if (!advcancedFilter || advcancedFilter === 'patient') {
        if (b.patient.toLowerCase().includes(e)) {
          return b
        }
      } else if (advcancedFilter === 'procedure') {
        if (b.procedure.toLowerCase().includes(e)) {
          return b
        }
      } else {
        return b
      }
    })
    setFilterBody(newBody)
  }

  const body: any = []

  const handleChecked = (id: number) => {
    const newBody = nativeBody?.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          answered: !item?.answered
        }
      } else {
        return { ...item }
      }
    })
    setNativeBody(newBody)
    setFilterBody(newBody)
    localStorage.setItem('bdSchedule', JSON.stringify(newBody))
  }

  filterBody?.map((item: Schedule) => {
    const data = {
      answered: {
        children: <input type="checkbox" checked={item?.answered} onChange={() => handleChecked(item?.id)} />
      },
      patitent: {
        children: item.patient
      },

      date: {
        children: item.date
      },
      time: {
        children: item.time
      },
      doctor: {
        children: item.doctor
      },
      value: {
        children: item.value ? `R$ ${item.value},00` : 'R$100,00'
      },
      procedure: {
        children: item.procedure
      },
      icon: {
        children: (
          <div style={{ display: 'flex' }}>
            <div>
              <PencilIcon
                className='time-icon'
                onClick={() => {
                  setQuey(item);
                  setOpen(true)
                }}
                data-toggle="tooltip"
                data-placement="right"
                title="Editar Paciente"
              />
            </div>
            <div>
              <MagnifyingGlassIcon
                className='time-icon'
                onClick={() => {
                  setQuey(item)
                  setOpenQuery(true)
                }}
                data-toggle="tooltip"
                data-placement="right"
                title="Editar Consulta" />
            </div>
          </div>
        )
      }
    }
    body.push(data)
  })

  const deleteSeach = () => {
    setFilterBody(nativeBody)
  }


  return (
    <>
      <div>
        <div className="filters">
          <div>
            <Search search={handleQuery} deleteSeach={deleteSeach} />
          </div>
          <div className='advcanced-filters' >
            <div onClick={() => {
              setAdvcancedFilter(undefined)
              setViewFilters(!viewFilters)
            }}>
              <FunnelIcon style={{ height: '15px', marginRight: '5px' }} />
              <p>Filtros Avancados</p>
            </div>
            {viewFilters && (
              <div className='a'>
                <label>Procedimento</label>
                <input name='advcanced-filter' value='procedure' type="radio" onChange={(e) => { setAdvcancedFilter(e.target.value) }} />
                <label>Paciente</label>
                <input checked name='advcanced-filter' value='patient' type="radio" onChange={(e) => { setAdvcancedFilter(e.target.value) }} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='notice'>
        <div>
          <Tables headers={headersTableQuery} bodyTable={body} columns={cols} />
        </div>
      </div>

      <Patient open={open} setOpen={setOpen} query={query} />
      <QueryComponent open={openQuery} setOpen={setOpenQuery} query={query} />
    </>
  )
}

export default Query