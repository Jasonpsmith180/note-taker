const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { nanoid } = require('nanoid');

// Get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Create new note
router.post('/notes', (req, res) => {
    req.body.id = nanoid();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// Delete note
router.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    const noteArray = deleteNote(req.params.id, notes);
    console.log(noteArray);
    res.json(noteArray);
});


module.exports = router;