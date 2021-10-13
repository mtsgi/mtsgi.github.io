<template>
  <div
    class="card"
    :class="{ transparent: !opaque }"
    :style="{ backgroundImage }"
    @mouseenter="$emit('mouse-hover')"
    @mouseleave="$emit('mouse-blur')"
  >
    <div class="card__area" @click.prevent="$emit('open-modal')"></div>

    <a
      v-if="repo.github"
      :href="`https://github.com/${repo.github}`"
      target="_blank"
      rel="noopener noreferrer"
      class="card__github-icon"
    >
      <i class="fab fa-github"></i>
    </a>

    <span v-if="repo.badge" class="card__badge">
      {{ repo.badge }}
    </span>

    <div class="card__detail">
      <h3>{{ repo.title }}</h3>
      <h4>{{ repo.github || repo.repository }}</h4>
      <div class="card__footer">
        <a @click.prevent="$emit('open-modal')">DETAILS</a>
        <a :href="repo.href" target="_blank" class="card__ext">OPEN</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true,
    },
    opaque: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    backgroundImage() {
      return `url(bg/${this.repo.bg || "image.png"})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  opacity: 1;
  margin: 20px;
  font-size: 26px;
  flex-grow: 2;
  flex-basis: max-content;
  height: 300px;
  width: 300px;
  max-width: calc(100vw - 80px);
  background-color: #ffffff;
  color: #404040;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: 0.15s all ease-in-out;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.2);
  background-position: center center;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.075);
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.4);
  }

  &__area {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: 0.1s all ease;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  &__github-icon {
    color: #ffffff;
    opacity: 1;
    position: absolute;
    right: 10px;
    font-size: 40px;
    &:hover {
      color: #404040;
    }
    .fa-github {
      transition: 0.1s all ease;
    }
    svg {
      margin-top: 10px;
    }
  }

  &__badge {
    position: absolute;
    left: 0;
    bottom: 134px;
    color: #ffffff;
    background: #5ec073;
    font-size: 16px;
    font-weight: 700;
    margin: 0 12px;
    padding: 5px 8px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  }

  &__detail {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 10px 15px 10px;
    bottom: 0px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.2);
    h3 {
      color: #606060;
      font-weight: 700;
      margin: 0;
    }
    h4 {
      font-weight: 300;
      color: #aaaaaa;
      font-size: 16px;
      line-height: 16px;
      margin: 0;
      margin-bottom: 12px;
    }
  }

  &__footer {
    display: flex;
    font-size: 20px;
    a {
      text-decoration: none;
      width: 50%;
      background: #ffffff;
      border: 1px solid dodgerblue;
      text-align: center;
      color: dodgerblue;
      margin-right: 8px;
      padding: 2px 0;
      border-radius: 6px;
      box-shadow: 0 2px 5px 0 rgba(22, 115, 209, 0.4);
      transition: 0.05s all ease-in-out;
      &.card__ext {
        margin: 0;
        background: dodgerblue;
        color: #ffffff;
        font-weight: 700;
        &:hover {
          border-color: #1673d1;
          background: #1673d1;
        }
      }
      &:hover {
        background: #f0f0f0;
      }
      &:active {
        box-shadow: none;
      }
    }
  }
}
</style>
