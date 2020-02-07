<template>
  <div class="links">
    <div>
      <a href="https://github.com/mtsgi" target="_blank">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <h2>mtsgi <span>github.io</span></h2>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {}
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
