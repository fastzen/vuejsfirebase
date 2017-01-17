<template lang="html">
  <form @submit.prevent="addBook()" class="form-inline" id="form">
    <div class="form-group">
      <label for="bookTitle">Title</label>
      <input v-model="newBook.title" class="form-control" type="text" id="bookTitle">
    </div>
    <div class="form-group">
      <label for="bookAuthor">Author</label>
      <input v-model="newBook.author" class="form-control" type="text" id="bookAuthor">
    </div>
    <div class="form-group">
      <label for="bookUrl">Url</label>
      <input v-model="newBook.url" class="form-control" type="text" id="bookUrl">
    </div>
    <input type="submit" class="btn btn-primary" value="Add Book">
  </form>
</template>

<script>
export default {
  props: ['newBook'],
  methods: {
    addBook () {
      this.$emit('newBookEvent', this.newBook)
    }
  }
}
</script>

<style lang="css">
</style>
