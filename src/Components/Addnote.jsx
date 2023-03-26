
import React , { useContext, useState } from 'react'

import { TbReload } from 'react-icons/tb'

import { themeContext } from '../App'

const Addnote = ({ handleSave }) => {

	const dark = useContext(themeContext)[0]

	const [text, setText] = useState('')
	const limit = 200

	const handleChange = (event) => {
		if(limit - event.target.value.length>=0 )
		{
			setText(event.target.value)
		}
	}

	const handleRefresh = () => {
		setText('')
	} 

	const handleSaveButton = () => {
		if(text.trim().length>0)
		{
			handleSave(text.trim())
			setText('')
		}
	}

	return (
		<div className={ `w-[400px] h-[200px] flex flex-col bg-[#5bd1c3] p-5 rounded-md ${dark ? 'shadow-lg shadow-gray-500' : 'shadow-lg shadow-gray-300' }` }>
			<textarea className='flex-grow bg-[#5bd1c3] placeholder-gray-800 outline-none' placeholder='Add new note...' onChange={handleChange} value = { text }></textarea>
			<div className='flex items-center justify-between mt-3'>
				<p>{ limit - text.length } charecters remaining</p>
				<div className='flex items-center gap-2'>
					<TbReload className='cursor-pointer' onClick={handleRefresh}/>
					<button onClick={handleSaveButton}>Save</button>
				</div>
			</div>
		</div>
	)
}

export default Addnote
