import React, {useContext} from 'react'
import { filterQueryContext } from '../App'
const Filter = () => {
  const {filterQuery, setFilterQuery} = useContext(filterQueryContext);
  const handleFilterQuery = (e)=>{
    if(e.target.value){
      setFilterQuery(e.target.value)
    }else{
      setFilterQuery(null)
    }
  }
  
  return (
    <div className='dark:bg-secondary shadow-lg rounded-md max-w-60'>
        <select onChange={()=> handleFilterQuery(event)} name="Filter-by-region " className='dark:bg-secondary dark sm:text-base bg-transparent w-full h-full cursor-pointer  text-md rounded-md px-5 py-4 focus:outline-none'>
            <option value="" >Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Americas">Americas</option>
        </select>
    </div>
  )
}

export default Filter