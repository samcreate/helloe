import React from 'react';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NotesList';
    }
    render() {

    	const notes = this.props.notes.map(function(note, index){
    		return <li className="list-group-item" key={index}> { note['.value'] } </li>
    	});
        return (
        	<ul className="list-group">
        		{notes}
        	</ul>
    	);
    }
}

export default NotesList;
