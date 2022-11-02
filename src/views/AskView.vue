<template>
  <div>
    <ul class="ask-list">
      <li v-for="item in fetchedAsk" v-bind:key="item.id" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div>
          <p class="ask-title">
            <router-link v-bind:to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by 
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
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
    // ...mapState({
    //   ask: state => state.ask
    // }),
    ...mapGetters(["fetchedAsk"]),
  },
  methods: {
    ...mapActions(["FETCH_ASK"]),
  },

  created() {
    this.FETCH_ASK();
    // fetchAskList()
    // .then(res => this.list = res.data)
    // .catch(err => console.log(err))
  },
};
</script>

<style scoped>
.ask-list {
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

.ask-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>