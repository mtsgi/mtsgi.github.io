<template>
  <div>
    <div class="modal-back" @click="$emit('close')"></div>
    <div class="modal">
      <div
        class="modal-title"
        :style="`background-image: url(bg/${data.bg || 'image.png'})`"
      >
        <a
          v-if="data.github"
          class="modal-github"
          :href="`https://github.com/${data.github}`"
          target="_blank"
        >
          Open in GitHub
          <i class="fab fa-github"></i>
        </a>
        {{ data.title }}
        <div class="modal-repo">{{ data.github }}</div>
        <div class="modal-desc">{{ data.description }}</div>
        <a class="modal-ext" :href="data.href" target="_blank">
          新しいタブで開く
          <i class="fas fa-external-link-alt"></i>
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
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.modal {
  z-index: 99;
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
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
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.5);
  background-position-x: center;
  max-height: calc(100vh - 80px);
  overflow-y: scroll;
  scrollbar-width: none;
  .modal-title {
    padding: 5px;
    padding-bottom: 10px;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: overlay;
    font-size: 50px;
    box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    text-align: center;
    .modal-repo {
      opacity: 0.75;
      font-size: 28px;
      margin: 15px 0 30px 0;
    }
    .modal-desc {
      background: rgba(255, 255, 255, 0.8);
      color: #404040;
      font-size: 18px;
      text-shadow: none;
      margin: 20px;
      margin-bottom: 0;
      padding: 14px;
      border-radius: 5px;
      backdrop-filter: blur(5px);
      white-space: pre-line;
      text-align: left;
      line-height: 1.75;
    }
  }
  .modal-github {
    display: block;
    font-size: 20px;
    text-align: right;
    padding: 10px;
    color: #ffffff;
  }
  .modal-ext {
    display: block;
    text-decoration: none;
    text-shadow: none;
    font-size: 20px;
    margin: 20px;
    font-weight: 600;
    text-align: center;
    background: dodgerblue;
    color: #ffffff;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s all ease-in-out;
    &:hover {
      border-color: #1673d1;
      background: #1673d1;
    }
  }
}
</style>
