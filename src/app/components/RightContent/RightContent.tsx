import Image from 'next/image'
import React from 'react'
import CardStack from '../cardStack/CardStack'
interface Props{
    span_1?: string
    span_2?:string
    span_3?:string
    span_4?:string
    span_5?: string
    bgIcons?: string
    bgColor?:string
    height?:string
}
const Index = ({height,bgIcons,bgColor,span_1,span_2,span_3,span_4,span_5}:Props) => {
  return (
      <div className={`${bgIcons || "bg-brokage_icons"}  
      ${bgColor || "bg-parisgreen"} ${height|| " h-[740px]" }
      px-8 pt-[70px]`}>
      <div className='bg-white rounded-lg flex justify-center items-center h-full w-full gap-16'>
               <CardStack/>  
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
          </div>
          
    </div>
  )
}

export default Index