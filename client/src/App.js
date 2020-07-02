import React from 'react'
import './App.css'

import SearchForm from './components/search-form/search-form.component'
import ImageContainer from './components/image-container/image-container.component'
import CustomImage from './components/custom-image/custom-image.component'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: {
				imageUrls: [],
			},
			initialLoad: false,
			page: 1,
			loading: false,
		}
		this.handleScroll = this.handleScroll.bind(this)

		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = e => {
		if (
			document.documentElement.scrollHeight -
				window.scrollY -
				window.innerHeight <
				100 &&
			this.state.initialLoad &&
			!this.state.loading
		) {
			console.log('handleScroll')
			this.setState({
				loading: true,
			})
			this.loadNextImages()
		}
	}
	loadImages = data => {
		console.log('loadimages')
		if (!data.err) {
			this.setState(state => ({
				data,
				initialLoad: true,
				page: 2,
			}))
		}
	}
	loadNextImages = async () => {
		console.log('loadnexttimages()')
		let url = `https://image-buddy-baraja.herokuapp.com/api/page/${this.state.page}`
		try {
			const res = await fetch(url)
			const images = await res.json()
			if (images.imageUrls.length > 0) {
				this.setState(state => ({
					page: state.page + 1,
					data: {
						imageUrls: [
							...state.data.imageUrls,
							...images.imageUrls,
						],
					},
					loading: false,
				}))
			}
			console.log('iamges', images)
		} catch (err) {}
	}
	render() {
		return (
			<div className='App'>
				<h1>
					Image Buddy{' '}
					<small style={{ fontSize: '0.5em' }}>By Baraja</small>
				</h1>
				<SearchForm loadImages={this.loadImages} />

				{this.state.data.imageUrls.length > 0 ? (
					<ImageContainer images={this.state.data.imageUrls} />
				) : (
					<ImageContainer>
						<CustomImage
							src={process.env.PUBLIC_URL + '/search girl.png'}
						/>
					</ImageContainer>
				)}

				{this.state.loading ? (
					<h3 style={{ textAlign: 'center', margin: '10px 0' }}>
						Loading ...
					</h3>
				) : (
					''
				)}
			</div>
		)
	}
}

export default App
