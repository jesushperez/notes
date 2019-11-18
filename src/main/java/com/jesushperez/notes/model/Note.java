package com.jesushperez.notes.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Note {

    @Id
    private String id;
    private String date;
    private String title;
    private String content;
    private boolean isPinned;

    public Note(String id, String date, String title, String content, boolean isPinned) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.content = content;
        this.isPinned = isPinned;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isPinned() {
        return isPinned;
    }

    public void setPinned(boolean pinned) {
        isPinned = pinned;
    }
}
