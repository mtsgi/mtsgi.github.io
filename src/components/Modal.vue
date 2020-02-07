<template>
  <div>
    <div class="modal-back" @click="$emit('close')"></div>
    <div class="modal">
      <div
        class="modal-title"
        :style="`background-image: url(bg/${data.bg || 'image.png'})`"
      >
        {{ data.title }}
        <div class="modal-repo">{{ data.github }}</div>
        <div class="modal-desc">{{ data.description }}</div>
        <a class="modal-ext" :href="data.href" target="_blank">
          新しいタブで開く
          <i class="fas fa-external-link-alt"></i>
        </a>
        <br />
        <a
          class="modal-ext"
          :href="`https://github.com/${data.github}`"
          target="_blank"
        >
          GitHubで開く
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["data"],
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.modal-back {
  z-index: 98;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.modal {
  z-index: 99;
  margin: 20px;
  font-size: 26px;
  width: calc(100vw - 80px);
  color: #404040;
  background-color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  left: 20px;
  top: 20px;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-position-x: center;
  &:hover {
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.3);
  }
  .modal-title {
    padding: 5px;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: overlay;
    font-size: 50px;
    box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    .modal-repo {
      opacity: 0.75;
      font-size: 28px;
    }
    .modal-desc {
      background: rgba(255, 255, 255, 0.8);
      color: #404040;
      font-size: 20px;
      text-shadow: none;
      margin: 20px;
      margin-bottom: 0;
      padding: 10px;
      border-radius: 5px;
      backdrop-filter: blur(5px);
    }
  }
  .modal-ext {
    color: #ffffff;
    font-size: 20px;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 1);
  }
}
</style>
