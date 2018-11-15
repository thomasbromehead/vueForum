<template>
  <div class="col-full">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import ThreadList from './ThreadList'
console.log(sourceData)

export default {
  name: 'HelloWorld',
  components: {
    ThreadList
  },
  data () {
    return {
      // Turn Threads object into an array and send to child as a key in the ThreadList tag
      threads: Object.values(sourceData.threads),
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>
