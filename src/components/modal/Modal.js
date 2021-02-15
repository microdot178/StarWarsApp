import React from 'react'
import './styles.css'

export default class Modal extends React.Component {
	state = {
		is0open: false
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={() => this.setState({is0open: true})}>Open modal</button>

				{this.state.is0open && <div className='modal'>
					<div className='modal-body'>
						<h1>modal title</h1>
						<p> i am awesome modal </p>
						<button onClick={() => this.setState({is0open: false})}> Close modal </button>
					</div>
				</div>}
			</React.Fragment>
		)
	}
}