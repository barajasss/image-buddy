import React from 'react'

import styles from './search-form.module.css'

import CustomInput from '../custom-input/custom-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SearchForm extends React.Component {
	state = {
		searchText: '',
		searching: false,
		searched: false,
		resultText: '',
	}
	handleChange = e => {
		this.setState({
			searchText: e.target.value,
		})
	}
	handleSubmit = async e => {
		e.preventDefault()
		this.props.emptyImageUrls()
		this.setState(state => ({
			searching: true,
			searched: true,
			resultText: `'${state.searchText}' images`,
		}))
		const url = `https://image-buddy-baraja.herokuapp.com/api/search?q=${this.state.searchText}`
		try {
			const res = await fetch(url)
			const data = await res.json()
			this.setState({
				searching: false,
			})
			this.props.loadImages(data)
			console.log(data)
		} catch (err) {
			console.log(err)
		}
	}
	render() {
		const active = !!this.state.searchText.length
		return (
			<div>
				<form
					onSubmit={
						active
							? this.handleSubmit
							: e => {
									e.preventDefault()
							  }
					}
					className={styles.searchForm}>
					<CustomInput
						searchText={this.state.searchText}
						handleChange={this.handleChange}
						placeholder='search any image...'
					/>
					<CustomButton
						handleSubmit={this.handleSubmit}
						active={active}
						searching={this.state.searching}>
						Search
					</CustomButton>
				</form>

				{this.state.searched ? (
					<h2 style={{ margin: '10px 0' }}>
						{this.state.resultText}
					</h2>
				) : (
					''
				)}
			</div>
		)
	}
}

export default SearchForm
