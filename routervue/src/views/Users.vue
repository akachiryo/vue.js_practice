<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile#next-user'">次のユーザー</router-link>
    <div style="height: 700px"></div>
    <router-link id="next-user" :to="{ name: users-id-profile, params: {id: Number(id) + 1}, query: { lang: 'ja'}, hash: 'next-user' }">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 1400px"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    const isLeave = window.confirm("本当にこのページを離れますか？");
    if(isLeave) {
      next();
    } else {
      next(false);
    }
  }
  // watch: {
  //   $route() {
  //     console.log('変更');
  //   }
  // }
}
</script>
