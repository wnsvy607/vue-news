<template>
  <list-item></list-item>
</template>
  
  <script>
import ListItem from "../components/ListItem.vue";
  import ListMixin from '@/mixins/ListMixin';

export default {
  components: {
    ListItem,
  },
//   mounted() {
//     bus.$emit("end:spinner");
//   },
    mixins: [ListMixin],
};
</script>