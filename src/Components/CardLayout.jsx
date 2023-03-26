
import React from 'react'

import Cards from './Cards'
import Addnote from './Addnote'

import { useAutoAnimate } from '@formkit/auto-animate/react'

const CardLayout = ({ search , notes , setNotes , handleSave , handleDelete }) => {

	const ref  = useAutoAnimate()[0]

	return (
		<div className='mt-7 grid grid-cols-3 place-items-center gap-6' ref={ref}>
			{ notes.map((note) => {
				if(search === "")
				{
					return <Cards text = { note.text } date = { note.date } key={ note.id } handleDelete = { handleDelete } id={ note.id }/>
				}
				else if(note.text.toLowerCase().includes(search.toLowerCase()))
				{
					return <Cards text = { note.text } date = { note.date } key={ note.id } handleDelete = { handleDelete } id={ note.id }/>
				}
			})}
			<Addnote handleSave={ handleSave }/>
		</div>
	)
}

export default CardLayout
