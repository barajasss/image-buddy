import React from 'react'

import styles from './image-container.module.css'
import CustomImage from '../custom-image/custom-image.component'

const ImageContainer = ({ images, children }) => (
	<div className={styles.imageContainer}>
		{images
			? images.map((imageUrl, i) => (
					<CustomImage src={imageUrl} key={i} />
			  ))
			: ''}
		{children}
	</div>
)

export default ImageContainer
