
import React,{ useContext } from 'react'

import { themeContext } from '../App'

const Header = () => {

	const [dark , setDark ] = useContext(themeContext)


	return (
		<div className='flex justify-between items-center'>
			<h1 className={`text-4xl font-semibold ${ dark ? 'text-white' : ''}`}>Notes</h1>
			<button className='text-md bg-gray-100 border border-gray-400 py-1 px-2 rounded-lg hover:bg-gray-200 transition duration-250' onClick={() => setDark(!dark)}>Dark mode</button>
		</div>
	)
}

export default Header
