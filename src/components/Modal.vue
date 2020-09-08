<template>
  <div>
    <div class="modal-back" @click="$emit('close')"></div>
    <div class="modal" :style="{ backgroundImage }">
      <div class="modal__container">
        <a
          v-if="data.github"
          :href="githubLink"
          class="modal__github"
          target="_blank"
        >
          Open in GitHub
          <i class="fab fa-github"></i>
        </a>

        <div class="modal__title" v-text="data.title"></div>
        <div class="modal__repo" v-text="data.github"></div>
        <div class="modal__desc" v-text="data.description"></div>

        <a class="modal__button" :href="data.href" target="_blank">
          新しいタブで開く
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    backgroundImage() {
      return `url(bg/${this.data.bg || "image.png"})`;
    },
    githubLink() {
      return `https://github.com/${this.data.github}`;
    }
  }
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
  border-radius: 12px;
  width: calc(100% - 160px);
  color: #404040;
  background-color: #ffffff;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: fixed;
  left: 80px;
  top: 60px;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 10px 32px 0 rgba(0, 0, 0, 0.5);
  max-height: calc(100vh - 80px);
  overflow-y: scroll;
  scrollbar-width: none;

  &__container {
    padding: 0 0 10px 0;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
    color: #ffffff;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  &__github {
    display: block;
    font-size: 20px;
    text-align: right;
    padding: 10px 20px 0 20px;
    color: #ffffff;
  }

  &__title {
    padding-top: 20px;
    font-size: 56px;
    font-weight: 700;
  }

  &__repo {
    color: #cccccc;
    font-size: 28px;
    margin: 15px 0 0 0;
  }

  &__desc {
    background: rgba(255, 255, 255, 0.65);
    color: #404040;
    font-size: 18px;
    text-shadow: none;
    margin-top: 20px;
    margin-bottom: 0;
    padding: 16px 24px;
    backdrop-filter: blur(5px);
    white-space: pre-line;
    text-align: left;
    line-height: 1.75;
  }

  &__button {
    display: block;
    text-decoration: none;
    text-shadow: none;
    font-size: 20px;
    margin: 32px 24px 20px 24px;
    font-weight: 700;
    text-align: center;
    background: dodgerblue;
    color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 3px 8px 0 rgba(22, 115, 209, 0.6);
    transition: 0.05s all ease-in-out;
    &:hover {
      border-color: #1673d1;
      background: #1673d1;
    }
  }
}
</style>
