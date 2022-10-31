<template>
  <div>
    <p v-for="item in fetchedAsk" v-bind:key="item.id"> 
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }}
        by {{ item.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    // ...mapState({
    //   ask: state => state.ask
    // }),
    ...mapGetters([
      'fetchedAsk'
    ])
  },
  methods: {
    ...mapActions([
      'FETCH_ASK',
    ])
  },

  created() {
    this.FETCH_ASK();
    // fetchAskList()
    // .then(res => this.list = res.data)
    // .catch(err => console.log(err))
  }

}
</script>

<style>

</style>