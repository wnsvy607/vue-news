<template>
  <div>
    <p v-for="artic in fetchedNews" v-bind:key="artic.id">
      <a :href="artic.url">
        {{ artic.title }}
      </a>
      <small>
        {{ artic.time_ago }}
        by {{ artic.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedNews',
    ]),
  },
  methods: {
    ...mapActions([
      'FETCH_NEWS'
    ])
  },
  created() {
    this.FETCH_NEWS();
    // fetchNewsList()
    // .then(response => this.users = response.data)
    // .catch(error => console.log(error))
  },
}
</script>

<style>

</style>