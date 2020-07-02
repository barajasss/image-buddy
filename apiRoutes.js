const axios = require('axios')
const express = require('express')
const router = express.Router()

const limit = 5
let searchText = ''

router.get('/search', async (req, res) => {
	searchText = req.query.q

	try {
		const url = `https://pixabay.com/api?key=${
			process.env.key
		}&q=${encodeURI(searchText)}&page=${1}&per_page=${limit}`
		const response = await axios(url)

		const imageUrls = response.data.hits.map(el => el.webformatURL)

		console.log(imageUrls)

		res.status(200).json({
			totalItems: imageUrls.length,
			imageUrls,
		})
	} catch (err) {
		console.log(err)
		res.status(200).json({
			err: err,
		})
	}
})

router.get('/page/:page', async (req, res) => {
	const page = req.params.page
	const url = `https://pixabay.com/api?key=${process.env.key}&q=${encodeURI(
		searchText
	)}&page=${page}&per_page=${limit}`

	const response = await axios(url)

	res.status(200).json({
		imageUrls: response.data.hits.map(el => el.webformatURL),
	})
})

module.exports = router
