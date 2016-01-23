import React from 'react'

class Repos extends React.Component{


	render(){

		const repos = this.props.repos.map((repo, index) => (
			<li className="list-group-item" key={index}>
				{repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
				{repo.description && <p>{repo.description}</p>}
			</li>
		));

		return (
			<div>
				<h3>User Repos</h3>
				<ul classNmae="list-group">
					{repos}
				</ul>
			</div>
			
		)
	}
}

Repos.propTypes = {
	username: React.PropTypes.string.isRequired,
	repos: React.PropTypes.array.isRequired
};
// Counter.propTypes = { initialCount: React.PropTypes.number };
//Counter.defaultProps = { initialCount: 0 };
export default Repos;