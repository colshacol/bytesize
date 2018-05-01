import * as React from 'react'
import { Link } from 'react-router-dom'
import { component } from '#utilities/createComponent'
import { Button } from '#components/Button'
import * as $ from './styled'

const deriveData = (self, newProps) => {
	return {
		test: 'testing'
	}
}

const setTest = (self, newValue = 'TESTING') => {
	self.ata.test = newValue
}

export const Home = component((self) => {
	self.setName('Home')
	self.deriveData(deriveData)
	self.addAction(setTest)

	return (instance) => {
		return (
			<$.container>
				<div className="main">
					<span className="textBox">
						<h1>bytesized</h1>
						<p>Create micro-lessons of your own.</p>
					</span>
					<$.buttonBox>
						<Link to="/lessons/new" className="button">
							<Button ghost color="purple" onClick={() => {}}>
								Create
							</Button>
						</Link>
					</$.buttonBox>
				</div>
			</$.container>
		)
	}
})
