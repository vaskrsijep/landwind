import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='w-full py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 items-center justify-center'>
        <div className='flex items-center justify-between gap-20'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-4xl font-extrabold leading-tight text-gray-900'>Work with tools you already use</h2>
            <p className='text-xl font-normal text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <span className='border border-1 border-gray-200'/>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5  text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Continuous integration and deployment</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Development workflow</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Knowledge management</p>
            </div>
            <p className='font-normal text-xl text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
          </div>
          <Image src="/images/features-1.png" alt="features" width={500} height={500}/>
        </div>

        <div className='flex items-center justify-between gap-20'>
        <Image src="/images/features-1.png" alt="features" width={500} height={500}/>
          <div className='flex flex-col gap-5'>
            <h2 className='text-4xl font-extrabold leading-tight text-gray-900'>We invest in the world’s potential</h2>
            <p className='text-xl font-normal text-gray-500'>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
            <span className='border border-1 border-gray-200'/>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5  text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Dynamic reports and dashboards</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Templates for everyone</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Development workflow</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Limitless business automation</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
              <CheckCircle2 className="h-5 text-purple-600" aria-hidden="true"/>
              <p className='font-medium text-base text-gray-800'>Knowledge management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features