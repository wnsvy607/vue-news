<template>
  <div>
    <div v-for="ask in list"> {{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    fetchAskList()
    .then(res => this.list = res.data)
    .catch(err => console.log(err))
  }

}
</script>

<style>

</style>