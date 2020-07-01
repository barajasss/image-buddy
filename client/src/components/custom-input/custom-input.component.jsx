import React from 'react'
import styles from './input.module.css'

const CustomInput = ({ searchText, handleChange, ...otherProps }) => (
	<input
		className={styles.input}
		type='search'
		value={searchText}
		onChange={handleChange}
		{...otherProps}
	/>
)

export default CustomInput
