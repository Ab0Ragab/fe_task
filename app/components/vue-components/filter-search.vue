<template>
  <div class="c-search-filter">
    <input
      type="search"
      placeholder="search"
      v-model="search"
      @input="changeVal()"
    />
    <button class="c-button c-search-filter__button" @click="clearVal">
      Clear
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    changeVal() {
      this.$emit("update-search", this.search);
    },
    clearVal() {
      this.search = "";
      this.$emit("update-search", "");
    },
  },
};
</script>

<style lang="scss">
.c-search-filter {
  display: flex;
  justify-content: center;
  gap: 16px;
  input {
    background: transparent;
    border: 2px solid;
    border-radius: 4px;
    padding: 0 8px;
    border-color: #0099ff;
    &:focus {
      border-color: #000000;
      outline: none;
    }
  }
}
</style>
