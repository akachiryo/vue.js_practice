<template>
  <div>
    <p>いいね({{ number / 2 }}){{ testt }}</p>
    <button @click='increment'>+1</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
      default: function() {
        return {
          number: 5
        }
      }
    },
    testt: {
      type: String
    }
  },
  methods: {
    increment() {
      this.$emit("my-click", this.number + 1);
    }
  }
};
</script>