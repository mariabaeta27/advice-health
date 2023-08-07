/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import './Search.css'
import { useEffect, useState } from 'react';

const Search = ({ search: handleChecked, deleteSeach }: {
  search: any,
  deleteSeach: any
}) => {

  const [search, setSearch] = useState<string>('')
  const [showClearIcon, setShowClearIcon] = useState(false)

  useEffect(() => {
    if (search) {
      handleChecked(search)
      setShowClearIcon(true)
    } else {
      deleteSeach()
      setShowClearIcon(false)
    }
  }, [search])

  return (
    <>
      <input
        type="text"
        className='input-card'
        placeholder='Buscar'
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
      />
      {
        !showClearIcon ? (
          <MagnifyingGlassIcon className='icon-query' />
        ) : (
          <XMarkIcon className='icon-query'
            onClick={() => {
              setSearch('')
              deleteSeach()
              setShowClearIcon(false)
            }}
          />
        )
      }
    </>
  )
};


export default Search