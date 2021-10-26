<template>
  <div>
    <h2>Home</h2>
    <nav>
      <router-link to="/" class="link" active-class="link-active" exact>Home</router-link>
      <router-link to="/users" class="link" active-class="link-active" exact>Users</router-link>
      <button @click="increment(2)">+1</button>
      <button @click="decrement(2)">-1</button>
    </nav>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions("count", ["increment", "decrement"])
    //  increment() {
    //    this.$store.dispatch('increment', 2)
    //  }
    // increment() {
    //   this.$store.commit('increment', 2);
    // },
    // decrement() {
    //   this.$store.commit('decrement', 2);
    // }
  },
}
</script>


<style>
.link {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}
</style>