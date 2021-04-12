const router = require('express').Router();
const { createNewNote, findById, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { nanoid } = require('nanoid');

// Get all notes
router.get('/notes', (req, res) => {
    let result = notes;
    res.json(result);
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
    const noteArray = deleteNote(findById(req.params.id, notes), notes);
    console.log(noteArray);
    res.json(noteArray);
});


module.exports = router;