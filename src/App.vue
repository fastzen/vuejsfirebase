<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Vue.js 2 &amp; Firebase Sample Application</h1>
    </div>
    <vue-toastr ref="toastr"></vue-toastr>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Add book</h3>
      </div>
      <div class="panel-body">
        <book :newBook="newBook" @newBookEvent="addBook($event)"></book>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Books List</h3>
      </div>
      <div class="panel-body">
        <books-list :books="books" @removeBookEvent="removeBook($event)"></books-list>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Books from './components/Books.vue'
import Book from './components/Book.vue'
import {config} from './config.js'

let app = Firebase.initializeApp(config)
let db = app.database()
let booksRef = db.ref('books')

export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      newBook: {
        title: '',
        author: '',
        url: ''
      }
    }
  },
  methods: {
    addBook (book) {
      booksRef.push(book)
      book.title = ''
      book.author = ''
      book.url = ''
      this.$refs.toastr.i('Book added', 'Information')
    },
    removeBook (book) {
      booksRef.child(book['.key']).remove()
      this.$refs.toastr.i('Book removed', 'Information')
    }
  },
  components: {
    booksList: Books,
    book: Book
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
