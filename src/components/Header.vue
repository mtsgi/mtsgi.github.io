<template>
  <header class="header">
    <div class="header__links">
      <a href="https://github.com/mtsgi" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a @click="$emit('switch-dark')">
        <i class="fa fa-adjust"></i>
      </a>
    </div>

    <h1 class="header__title">mtsgi <span>github.io</span></h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      darkmode: false,
    };
  },
  methods: {
    toggleMode() {
      if (this.darkmode) {
        this.darkmode = false;
        document.querySelector("body").classList.remove("dark-body");
        document.querySelector("#app").classList.remove("dark");
      } else {
        this.darkmode = true;
        document.querySelector("body").classList.add("dark-body");
        document.querySelector("#app").classList.add("dark");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  &__links {
    flex-grow: 1;
    > a {
      color: #ffffff;
      font-size: 30px;
      position: relative;
      left: 20px;
      top: 18px;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        opacity: 0.75;
      }
    }
  }
  &__title {
    margin: 0;
    font-weight: 300;
    font-size: 60px;
    text-align: right;
    > span {
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
