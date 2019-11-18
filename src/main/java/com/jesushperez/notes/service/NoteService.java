package com.jesushperez.notes.service;

import com.jesushperez.notes.model.Note;
import com.jesushperez.notes.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    // Adds note to DB
    public void addNote(Note note) {
        noteRepository.save(note);
    }

    // Returns all notes from DB
    public List<Note> getAllNotes() {
        List<Note> notes = new ArrayList<>();
        noteRepository.findAll().forEach(notes::add);
        return notes;
    }

    // Returns individual note from DB
    public Note getNote(String id) {
        return noteRepository.findById(id).get();
    }

    // Updates note to DB
    public void updateNote(Note note) {
        noteRepository.save(note);
    }
}
