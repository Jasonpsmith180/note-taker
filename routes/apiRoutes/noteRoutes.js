const router = require('express').Router();
const createNewNote = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// Get all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// Create new note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});



module.exports = router;