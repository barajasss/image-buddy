const axios = require('axios')
const express = require('express')
const router = express.Router()

let images = []

router.get('/search', async (req, res) => {
	const searchText = req.query.q

	try {
		const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.key}&cx=${process.env.cx}&q=${searchText}&imgSize=medium`
		const response = await axios(url)

		let imageUrls = response.data.items[0].pagemap.imageobject.map(
			({ contenturl: imageUrl }) => imageUrl
		)

		// store images in global array and send first five images

		images = imageUrls
		imageUrls = imageUrls.filter((el, i) => (i < 5 ? true : false))

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

router.get('/page/:page', (req, res) => {
	const page = req.params.page
	const limit = 5
	const start = (page - 1) * limit
	const end = start + limit

	res.status(200).json({
		imageUrls: images.slice(start, end),
	})
})

module.exports = router
