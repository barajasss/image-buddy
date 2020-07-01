import React from 'react'

import styles from './custom-image.module.css'

const CustomImage = ({ ...props }) => <img {...props} className={styles.img} />

export default CustomImage
