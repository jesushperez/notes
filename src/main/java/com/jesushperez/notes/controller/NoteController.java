package com.jesushperez.notes.controller;

import com.jesushperez.notes.model.Note;
import com.jesushperez.notes.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteService noteService;

    // Adds new note
    @RequestMapping(method= RequestMethod.POST, value="/notes")
    public void addNote(@RequestBody Note note) {
        noteService.addNote(note);
    }

    // Returns all notes
    @RequestMapping("/notes")
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }
}
