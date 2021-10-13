<template>
  <div class="links">
    <div>
      <a href="https://github.com/mtsgi" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a @click="toggleMode()">
        <i class="fa fa-adjust"></i>
      </a>
    </div>
    <h2>mtsgi <span>github.io</span></h2>
  </div>
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
.links {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  div {
    flex-grow: 1;
    a {
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
  h2 {
    margin: 0;
    font-weight: 300;
    font-size: 60px;
    text-align: right;
    span {
      opacity: 0.6;
    }
  }
}
</style>
