import Image from 'next/image'
import React from 'react'
import CardStack from '../cardStack/CardStack'
interface Props{

    span_1?: string
    span_2?:string
    span_3?:string
    span_4?:string
    span_5?:string
    
}
const LeftContent = ({span_1,span_2,span_3,span_4,span_5}:Props) => {
  return (
      <div className='bg-brokage_icons bg-darkskyblue h-[740px] px-8 pt-[70px]'>
              <div className='bg-white rounded-lg flex justify-center items-center h-full w-full gap-16'>
              <p className=' flex flex-col items-start text-ocean text-xl font-medium'>
                      <span className='font-semibold'>
                      Connect your brokerage accounts 
                    </span>
                  <span>
                  and get access to trading ideas,
                  </span>
                  <span>
                  aggregated stats and discussions in
                  </span>
                  <span>         your tech investing community right
                  </span>
                  <span>away.</span>
                </p>
        <CardStack/>
        
          </div>
          
    </div>
  )
}

export default LeftContent