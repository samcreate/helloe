// import React from 'react'
// import Router from 'react-router'
// import Repos from './Github/Repos'
// import UserProfile from './Github/UserProfile'
// import Notes from './Notes/Notes'
// import ReactFireMixin from 'reactfire'
// import FireBase from 'firebase';
// import helper from '../utils/helpers'

// class Profile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.displayName = 'Profile';
        
//         this.state = {
//         	notes:[1,2,3],
//         	bio: {name: 'Loading...'},
//         	repos: []
//         };
        
//         //let's add the mixin
//         for(let func in ReactFireMixin){
//         	this[func] = ReactFireMixin[func];
//         }
        
//     }
//     init(username){

		
// 		const childRef = this.ref.child(username);

// 		this.bindAsArray(childRef, 'notes');

// 		helper.getGithubInfo(username)
// 		.then((data)=>{

// 			console.log();
// 			this.setState({
// 				bio: data.bio,
// 				repos: data.repos
// 			});
// 		});

//     }
// 	componentDidMount() {

// 		this.ref = new FireBase('https://crackling-torch-3671.firebaseio.com/');
// 		this.init(this.props.params.username);
// 	}
// 	componentWillReceiveProps(nextProps) {
// 		this.unbind('notes');
// 		this.init(nextProps.params.username);
// 	}
// 	componentWillUnmount() {
// 		this.unbind('notes');
// 	}
// 	handleAddNote(newNote){
// 		this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
// 	}
// 	render(){
// 		return (
// 			<div className="row">
// 				<div className="col-md-4">
// 					<UserProfile username={this.props.params.username} bio={this.state.bio}/>
// 				</div>
// 				<div className="col-md-4">
// 					<Repos repos={this.state.repos} username={this.props.params.username} />
// 				</div>
// 				<div className="col-md-4">
// 					<Notes notes={this.state.notes} username={this.props.params.username} addNote={this.handleAddNote.bind(this)} />
// 				</div>
// 			</div>
// 		)
// 	}
// };

// export default Profile;
