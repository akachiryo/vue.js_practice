<template>
<div>
  <p v-border:solid.round="{width: '5px', color: 'red'}">Home</p>
  <h2>{{ title | upperCase }}</h2>
  <h2>{{ subtitle | lowerCase }}</h2>
  <CountNumber></CountNumber>
</div>
</template>

<script>
import CountNumber from './CountNumber.vue';
import { tokyoNumber } from "@/tokyoNumber";
export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello",
    };
  },
  filters: {
      lowerCase(value) {
        return value.toLowerCase();
      }
  },
  components: {
    CountNumber
  },
  // computed: {
  //   upperCaseTitle() {
  //     return this.title.toUpperCase();
  //   }
  // },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
      el.style.borderRadius = "0.5rem"
  }
    }
  }
}
</script>