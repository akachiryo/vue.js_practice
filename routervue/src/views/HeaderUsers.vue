<template>
  <div>
    <h2>Users</h2>
    <nav>
      <router-link to="/" class="link" active-class="link-active" exact>Home</router-link>
      <router-link to="/users" class="link" active-class="link-active" exact>Users</router-link>
    </nav>
  </div>
</template>

<style>
.link {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}
</style>