import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { Tables } from "../../components"

const Query = () => {
  return (
    <>
      <div>
        <input
          type="text"
          className='input-card-primary'
          placeholder='Buscar'
        />
        <MagnifyingGlassIcon className='icon-query' />
      </div>
      <div>
        FILTROS!!!!!!!!!!!!!!!!!!!!!
      </div>
      <div className='notice'>
        <div>
          <Tables />
        </div>
      </div>
    </>
  )
}

export default Query