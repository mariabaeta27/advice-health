/* eslint-disable @typescript-eslint/no-explicit-any */
import './Quey.css'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Tables } from "../../components"
import { bodyTableQuery, headersTableQuery } from "../../constants"
import { useEffect, useState } from "react"
import { FunnelIcon } from '@heroicons/react/20/solid'

const Query = () => {

  const cols = ['status', 'patitent', 'doctor', 'date', 'time', 'local', 'priority']
  const [nativeBody, setNativeBody] = useState<any>()
  const [viewFilters, setViewFilters] = useState(false)
  const [advcancedFilter, setAdvcancedFilter] = useState<string | undefined>()

  useEffect(() => {
    setNativeBody(bodyTableQuery)
  }, [])



  const handleQuery = (e: string) => {
    const newBody = bodyTableQuery.filter((b) => {
      if (advcancedFilter === undefined || advcancedFilter === 'patient') {
        if (b.name.includes(e)) {
          console.log('AQUIIIII')
          return b
        }
      } else if (advcancedFilter === 'doctor') {
        if (b.doctor.includes(e)) {
          return b
        }
      } else {
        return b
      }
    })
    console.log(newBody)
    setNativeBody(newBody)
  }


  const body: any = []

  const handleChecked = (id: number) => {
    const newBody = nativeBody?.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item?.statuss
        }
      } else {
        return { ...item }
      }
    })
    body(newBody)
  }

  nativeBody?.map((item: any) => {
    const data = {
      status: {
        children: <input type="checkbox" checked={item?.status} onChange={() => handleChecked(item?.id)} />
      },
      patitent: {
        children: item.name
      },
      doctor: {
        children: item.doctor
      },
      date: {
        children: item.date
      },
      time: {
        children: item.time
      },
      local: {
        children: 'Consultório Principal'
      },
      priority: {
        children: item.priority
      }
    }
    body.push(data)
  })



  return (
    <>
      <div>
        <div className="filters">
          <input
            type="text"
            className='input-card-primary'
            placeholder='Buscar'
            style={{ width: '300px' }}
            onChange={(e) => handleQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className='icon-query' style={{ left: '30px' }} />
          <div className='advcanced-filters' onClick={() => {
            setAdvcancedFilter(undefined)
            setViewFilters(!viewFilters)
          }}>
            <FunnelIcon style={{ height: '15px', marginRight: '5px' }} />
            <p>Filtros Avancados</p>
            <div>
              {viewFilters && (
                <>
                  <div>
                    <label>Doutor(a)</label>
                    <input name='advcanced-filter' value='doctor' type="radio" onChange={(e) => { setAdvcancedFilter(e.target.value) }} />
                    <label>Paciente</label>
                    <input name='advcanced-filters' value='patient' type="radio" onChange={(e) => { setAdvcancedFilter(e.target.value) }} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='notice'>
        <div>
          <Tables headers={headersTableQuery} bodyTable={body} columns={cols} />
        </div>
      </div>
    </>
  )
}

export default Query