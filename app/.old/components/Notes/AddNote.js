import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AddNote';
        this.note = {};
;
    }
    setNoteValue(ref){
    	this.note = ref;
    }
    handleSubmit(){
    	let newNote = this.note.value;
    	this.note.value = '';
    	this.props.addNote(newNote);
    }
    render() {
    	
        return(
        	<div className="input-group">
        		<input type="text" className="form-control" placeholder="Add New Note"  ref={ this.setNoteValue.bind(this) }/>
        		<span className="input-group-btn">
        			<button className=" btn btn-default" type="button" onClick={ this.handleSubmit.bind(this)}>Submit</button>
        		</span>
        	</div>
        	)
    }
}

AddNote.propTypes = {
	username: React.PropTypes.string.isRequired,
	addNote: React.PropTypes.func.isRequired
};

export default AddNote;
