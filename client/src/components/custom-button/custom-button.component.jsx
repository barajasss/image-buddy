import React from 'react'
import styles from './custom-button.module.css'

const CustomButton = ({ children, active, searching, handleSubmit }) => (
	<button
		className={`${styles.button} ${
			active && !searching ? styles.active : ''
		}`}
		onClick={!!active ? handleSubmit : () => {}}>
		{searching ? 'wait...' : children}
	</button>
)

export default CustomButton
