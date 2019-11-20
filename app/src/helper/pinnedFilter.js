function pinnedFilter(notes, isPinned) {
  return notes.filter(note => note.isPinned === isPinned);
}

export default pinnedFilter;