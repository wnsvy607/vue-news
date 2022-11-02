<template>
  <div>
    <ul class="jobs-list">
      <li v-for="job in fetchedJobs" v-bind:key="job.id" class="post">
        <div class="pic">
          <i class="fa-sharp fa-solid fa-briefcase"></i>
        </div>
        <div>
          <p class="jobs-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small>
            {{ job.time_ago }},
            {{ job.domain }}
          </small>
        </div>
      </li>
    </ul>
    <p v-for="job in fetchedJobs" v-bind:key="job.id"></p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedJobs"]),
  },
  methods: {
    ...mapActions(["FETCH_JOBS"]),
  },
  created() {
    this.FETCH_JOBS();
    // fetchJobsList()
    //   .then(res => this.jobs = res.data)
    //   .catch(err => console.log(err))
  },
};
</script>

<style scoped>
.jobs-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.jobs-title {
  margin: 0;
}

.pic {
  width: 60px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
</style>