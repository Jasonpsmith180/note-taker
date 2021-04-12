const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function deleteNote(id, notesArray) {
    const notes = notesArray.filter(note => note.id != id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notes;
}

module.exports = {createNewNote, deleteNote}