import React from 'react'
import Search from './Search'
import Filter from './Filter'


const SFcontainer = () => {
  return (
    <div className='sm:flex justify-between px-5 py-6'>
        <Search/>
        <Filter/>
    </div>
  )
}

export default SFcontainer