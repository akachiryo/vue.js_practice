<template>
  <div>
    <input id="title" type="text" v-model="eventData.title" @input="$emit('input', $event.target.value)">
    <p>{{ eventData.title}}</p>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>