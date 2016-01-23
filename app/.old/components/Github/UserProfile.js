import React from 'react';

let UserProfile = React.createClass({
	render(){
		const profile = this.props.bio;
		const {avatar_url, name, login, email, location, company, followers, following, blog, public_repos} = profile;
		return(
			<div>
				{avatar_url && <li className="list-group-item">
					<img src={avatar_url} alt="" className="img-rounded img-responsive"/>
				</li>}
				{name && <li className="list-group-item">
					Name: {name}
				</li>}
				{login && <li className="list-group-item">
					Username: {login}
				</li>}
				{email && <li className="list-group-item">
					Email: {email}
				</li>}
				{location && <li className="list-group-item">
					Location: {location}
				</li>}
				{company && <li className="list-group-item">
					Company: {company}
				</li>}
				{followers && <li className="list-group-item">
					Followers: {followers}
				</li>}
				{following && <li className="list-group-item">
					Following: {following}
				</li>}
				{public_repos && <li className="list-group-item">
					Public Repos: {public_repos}
				</li>}
				{blog && <li className="list-group-item">
					Blog: {blog}
				</li>}
			</div>
			)
	}
});

UserProfile.propTypes = {
	username: React.PropTypes.string.isRequired,
	bio: React.PropTypes.object.isRequired
};
export default UserProfile;