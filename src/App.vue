<template>
  <div :class="{ dark: isDark }">
    <div class="background">
      <ul class="o">
        <li v-for="i in 10" :key="`o-${i}`" />
      </ul>
    </div>

    <Header @switch-dark="switchDark" />

    <div class="filter">
      <a
        v-for="filter in filters"
        :key="filter.tag"
        :class="{
          active: dispTag === filter.tag,
        }"
        @click="applyFilter(filter.tag)"
      >
        {{ filter.text }}
      </a>
    </div>

    <div class="cards">
      <Card
        v-for="repo in dispRepos"
        :key="repo.title"
        :repo="repo"
        :opaque="!hovered || hovered === repo.title"
        :active="active"
        @mouse-hover="enter(repo.title)"
        @mouse-blur="leave"
        @open-modal="onOpen(repo.title)"
      />
    </div>

    <Modal v-if="activeRepo" :data="activeRepo" @close="onClose" />
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";

import repos from "./assets/repos.js";

export default {
  components: {
    Header,
    Card,
    Modal,
  },
  methods: {
    enter(title) {
      this.hovered = title;
    },
    leave() {
      this.hovered = null;
    },
    onOpen(title) {
      this.active = title;
    },
    onClose() {
      this.active = null;
    },
    switchDark() {
      this.isDark = !this.isDark;
      document.body.classList.toggle("-dark", this.isDark);
    },
    applyFilter(tag) {
      this.dispTag = tag;
    },
  },
  data: function () {
    return {
      isDark: false,
      hovered: null,
      active: null,
      disp: [],
      dispTag: "all",
      repos,
      filters: [
        {
          text: "ALL",
          tag: "all",
        },
        {
          text: "JavaScript",
          tag: "js",
        },
        {
          text: "CSS",
          tag: "css",
        },
        {
          text: "Ruby",
          tag: "ruby",
        },
        {
          text: "MIT License",
          tag: "mit",
        },
        {
          text: "Apache-2.0 License",
          tag: "apache",
        },
        {
          text: "ツール",
          tag: "tool",
        },
        {
          text: "ライブラリ",
          tag: "library",
        },
        {
          text: "フレームワーク",
          tag: "framework",
        },
        {
          text: "ゲーム",
          tag: "game",
        },
        {
          text: "拡張機能",
          tag: "extension",
        },
      ],
    };
  },
  computed: {
    dispRepos() {
      if (this.dispTag === "all") return this.repos;
      return this.repos.filter((repo) =>
        repo.tags.split(" ").includes(this.dispTag)
      );
    },
    activeRepo() {
      return this.repos.find((repo) => repo.title === this.active);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  margin: 32px 0px;
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
  letter-spacing: 1px;
  a {
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    &.active {
      font-weight: bold;
      color: #23a6d5;
      background-clip: text;
      background: #ffffff;
    }
  }
}

.cards {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.dark {
  .filter a.active {
    color: #303030;
  }
  /deep/ .card__detail {
    background: #505050;
    color: #ffffff;
    > h3 {
      color: #ffffff;
    }
    .card__footer a:not(.card__ext) {
      box-shadow: none;
      background: transparent;
      border-color: #ffffff;
      color: #ffffff;
    }
  }
}

/deep/ .modal__readme {
  h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    margin: 0 0 12px 0;
  }
  strong {
    font-weight: 700;
  }
  a {
    color: dodgerblue;
  }
  ul {
    margin: 0 0 12px 0;
    li {
      line-height: 1.75em;
    }
  }
  pre {
    margin: 0 0 12px 0;
    padding: 12px;
    overflow: auto;
    scrollbar-width: thin;
    font-size: 90%;
    background-color: #f0f0f0;
    border-radius: 8px;
    code {
      background: transparent;
      margin: 0;
      padding: 0;
    }
  }
  code {
    padding: 0.2em 0.4em;
    margin: 0 4px;
    font-size: 90%;
    background-color: #f0f0f0;
    border-radius: 6px;
  }
  p {
    word-wrap: break-word;
    margin: 0 0 12px 0;
    img {
      max-width: 100%;
      display: inline;
    }
  }
  blockquote {
    margin: 0;
    color: #606060;
    border-left: 4px solid #ffffff;
    padding-left: 16px;
  }
  hr {
    height: 2px;
    margin: 24px 0;
    border: none;
    background: #f0f0f0;
  }
}
</style>
