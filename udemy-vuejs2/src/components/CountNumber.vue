<template>
<div>
  <h2>{{ title | upperCase }}</h2>
  <h2>{{ subtitle | lowerCase }}</h2>
</div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"
export default {
  mixins: [ tokyoNumber ]
};
</script>