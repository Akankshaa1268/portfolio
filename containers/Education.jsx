import React from 'react'
import EducationList from '@/components/Education'

const EducationContainer = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* Exactly the same class as your Work container */}
      <div className='font-medium'>education.</div> 
      <div>
        <EducationList />
      </div>
    </div>
  )
}

export default EducationContainer;