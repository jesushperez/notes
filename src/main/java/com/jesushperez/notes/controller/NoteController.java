package com.jesushperez.notes.controller;

import com.jesushperez.notes.model.Note;
import com.jesushperez.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

    // Adds new note
    @RequestMapping(method=RequestMethod.POST, value="/notes", consumes="application/json", produces="application/json")
    public Note addNote(@RequestBody Note note) {
        noteService.addNote(note);
        return note;
    }

    // Returns all notes
    @RequestMapping("/notes")
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    // Returns individual note
    @RequestMapping("/notes/{id}")
    public Note getNote(@PathVariable String id) {
        return noteService.getNote(id);
    }

    // Updates individual note
    @RequestMapping(method=RequestMethod.PUT, value="/notes/{id}")
    public Note updateNote(@RequestBody Note note) {
        noteService.updateNote(note);
        return note;
    }

    // Deletes individual note
    @RequestMapping(method=RequestMethod.DELETE, value="/notes/{id}")
    public Note deleteNote(@PathVariable String id) {
        Note deletedNote = noteService.getNote(id);
        noteService.deleteNote(id);
        return deletedNote;
    }

}
