'use client'

import { useState } from 'react'
import styles from './page.module.scss'

export default function App() {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.App}>
			<button
				onClick={() => setOpen(true)}
				className={styles.openModalBtn}
			>
				Tap me 🐽
			</button>
			<div className={`${styles.overlayAnimated}${open ? '.show' : ''}`}>
				<div className={styles.modal}>
					<svg
						onClick={() => setOpen(false)}
						height='200'
						viewBox='0 0 200 200'
						width='200'
					>
						<title />
						<path d='M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z' />
					</svg>
					<p>🐷</p>
				</div>
			</div>
		</div>
	)
}
