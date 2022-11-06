<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
    <UserProfile>
      <div slot="username">{{ fetchedItem.user}}</div>
      <template slot="time">{{ fetchedItem.time_ago}}</template>
    </UserProfile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
  components: {
    UserProfile,
  }
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.8rem;
}
</style>