import axios from "axios";

export default {
  // search books
  searchBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  searchBooksById: function(id) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + id)
  },
  // Get all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};