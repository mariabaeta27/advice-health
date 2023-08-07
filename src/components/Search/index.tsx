/* eslint-disable @typescript-eslint/no-explicit-any */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import './Search.css'
import { useState } from 'react';

const Search = ({ onClick }: {
  onClick: any
}) => {

  const [search, setSearch] = useState<string>()

  return (
    <>
      <input
        type="text"
        className='input-card'
        placeholder='Buscar'
        onChange={(e) => setSearch(e.target.value)}
      />
      <MagnifyingGlassIcon className='icon-query' onClick={() => onClick(search)} />
    </>
  )
};


export default Search