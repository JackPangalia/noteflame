'use client'

import React, { useState } from 'react'

const WriteNote = () => {
  const [text, setText] = useState('')

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
    console.log('text ', text)
  }

  return (
    <section className = 'flex justify-center h-[84vh] items-center'>
      <textarea 
        value = {text}
        onChange = {handleTextChange}
        className = 'w-2/3 h-3/4 p-6 rounded-md shadow-sm resize-none bg-zinc-900 outline-none text-gray-100 text-lg'
        placeholder = 'Start Typing Here'
      />
    </section>
  )
}

export default WriteNote