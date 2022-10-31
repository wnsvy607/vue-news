<template>
  <div>
    <p v-for="job in fetchedJobs" v-bind:key="job.id">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>
        {{ job.time_ago }},
        {{ job.domain }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_JOBS',
    ])
  },
  created() {
    this.FETCH_JOBS();
    // fetchJobsList()
    //   .then(res => this.jobs = res.data)
    //   .catch(err => console.log(err))
  },
};
</script>

<style>
</style>