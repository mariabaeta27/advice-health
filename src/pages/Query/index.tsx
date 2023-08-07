/* eslint-disable @typescript-eslint/no-explicit-any */
import './Quey.css'
import { Search, Tables } from "../../components"
import { headersTableQuery } from "../../constants"
import { useEffect, useState } from "react"
import { FunnelIcon, MagnifyingGlassIcon, PencilIcon } from '@heroicons/react/20/solid'
import User from '../../components/Patient'

const Query = () => {

  const cols = ['status', 'patitent', 'date', 'time', 'value', 'procedure', 'icon']


  const [nativeBody, setNativeBody] = useState<any>()
  const [filterBody, setFilterBody] = useState<any>()
  const [viewFilters, setViewFilters] = useState(false)
  const [advcancedFilter, setAdvcancedFilter] = useState<string | undefined>()
  const [open, setOpen] = useState(false)



  const getData = () => {
    const keyBodyTableQuery = localStorage.getItem('times')
    setNativeBody(keyBodyTableQuery && JSON.parse(keyBodyTableQuery))
    setFilterBody(keyBodyTableQuery && JSON.parse(keyBodyTableQuery))
  }



  useEffect(() => {
    getData()
  }, [])



  const handleQuery = (e: string) => {
    const newBody = nativeBody.filter((b: any) => {
      if (!advcancedFilter || advcancedFilter === 'patient') {
        if (b.name.toLowerCase().includes(e)) {

          return b
        }
      } else if (advcancedFilter === 'doctor') {
        if (b.doctor.toLowerCase().includes(e)) {
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
          status: !item?.status
        }
      } else {
        return { ...item }
      }
    })
    setNativeBody(newBody)
    localStorage.setItem('bodyTableQuery', JSON.stringify(newBody))
  }

  filterBody?.map((item: any) => {
    const data = {
      status: {
        children: <input type="checkbox" checked={item?.status} onChange={() => handleChecked(item?.id)} />
      },
      patitent: {
        children: item.schedule?.title
      },

      date: {
        children: '20/08/2023'
      },
      time: {
        children: item.time
      },
      value: {
        children: item.value ? `R$ ${item.value}` : 'R$100,00'
      },
      procedure: {
        children: 'Extração'
      },
      icon: {
        children: (
          <div style={{ display: 'flex' }}>
            <PencilIcon className='time-icon' onClick={() => setOpen(true)} />
            <MagnifyingGlassIcon className='time-icon' onClick={() => setOpen(true)} />
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
                <label>Doutor(a)</label>
                <input name='advcanced-filter' value='doctor' type="radio" onChange={(e) => { setAdvcancedFilter(e.target.value) }} />
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

      <User open={open} setOpen={setOpen} />

    </>
  )
}

export default Query