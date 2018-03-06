console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title,body) => {
    //console.log('Adding note: ', title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title) => {
    console.log('Reading note: ', title);
};

var removeNote = (title) => {
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with the title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    // save notes
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    //addNote: addNote // Identical as below
    addNote,
    getAll,
    readNote,
    removeNote
};