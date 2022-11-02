<template>
  <div>
    <ul class="news-list">
      <li v-for="artic in fetchedNews" v-bind:key="artic.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ artic.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a :href="artic.url">
              {{ artic.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`/user/${artic.user}`" class="link-text">
              {{ artic.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  methods: {
    ...mapActions(["FETCH_NEWS"]),
  },
  created() {
    this.FETCH_NEWS();
    // fetchNewsList()
    // .then(response => this.users = response.data)
    // .catch(error => console.log(error))
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>