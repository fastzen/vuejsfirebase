<template lang="html">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books">
        <td><a :href="book.url">{{ book.title }}</a></td>
        <td>{{ book.author }}</td>
        <td><span @click="removeBook(book)" class="glyphicon glyphicon-trash"></span></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['books'],
  methods: {
    removeBook (book) {
      this.$emit('removeBookEvent', book)
    }
  }
}
</script>

<style lang="css">
</style>
