import React from 'react'

import styles from './top-button.module.css'

class TopButton extends React.Component {
	handleClick() {
		window.scroll(0, 0)
	}
	render() {
		let left, top
		const { appRef } = this.props
		if (appRef) {
			left = appRef.offsetLeft + appRef.offsetWidth - 70
			top = window.innerHeight - 60
		}
		return (
			<button
				style={{ left: `${left}px`, top: `${top}px` }}
				onClick={this.handleClick}
				className={styles.topButton}>
				Top
			</button>
		)
	}
}

export default TopButton
