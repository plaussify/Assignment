import React from 'react'


const Container = ({children}) => {
  return (
<div className="w-[100vw] min-h-[100vh] overflow-x-hidden bg-[#F6F7F9]">
        {children}
    </div>
  )
}

export default Container