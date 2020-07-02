import React from 'react'
import './App.css'

import SearchForm from './components/search-form/search-form.component'
import ImageContainer from './components/image-container/image-container.component'
import CustomImage from './components/custom-image/custom-image.component'
import TopButton from './components/top-button/top-button.component'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: {
				imageUrls: [],
			},
			appRef: null,
			initialLoad: false,
			page: 1,
			loading: false,
		}
		this.handleScroll = this.handleScroll.bind(this)
		this.appRef = React.createRef()
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
			this.setState({
				loading: true,
			})
			this.loadNextImages()
		}
	}
	loadImages = data => {
		if (!data.err) {
			this.setState(state => ({
				data,
				initialLoad: true,
				page: 2,
			}))
		}
	}
	loadNextImages = async () => {
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
	componentDidMount() {
		this.setState({
			appRef: this.appRef,
		})
	}
	render() {
		return (
			<div className='App' ref={this.appRef}>
				<h1>
					Image Buddy{' '}
					<small style={{ fontSize: '0.5em' }}>By Baraja</small>
				</h1>
				<h2 style={{ marginTop: '-20px' }}>
					<small style={{ fontSize: '0.5em' }}>
						Credits: pixabay.com |
					</small>{' '}
					<a
						href='https://github.com/barajasss/image-buddy'
						target='_blank'
						style={{ color: 'dodgerblue' }}>
						<small style={{ fontSize: '0.5em' }}>Source Code</small>
					</a>
				</h2>
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
				<TopButton
					appRef={
						this.state.appRef ? this.state.appRef.current : null
					}
				/>
			</div>
		)
	}
}

export default App
