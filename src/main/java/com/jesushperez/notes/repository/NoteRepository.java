package com.jesushperez.notes.repository;

import com.jesushperez.notes.model.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, String> {

}
