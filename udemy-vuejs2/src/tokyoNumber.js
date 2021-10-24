export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subtitle: "Tokyo is Great City"
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};