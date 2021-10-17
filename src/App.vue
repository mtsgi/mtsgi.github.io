<template>
  <div id="app">
    <div class="background">
      <ul class="o">
        <li v-for="i in 10" :key="i"></li>
      </ul>
    </div>
    <Links></Links>
    <div class="filter">
      <a
        :class="{
          active: dispTag == 'all',
        }"
        @click="filter('all')"
        >ALL</a
      >
      <a
        :class="{
          active: dispTag == 'js',
        }"
        @click="filter('js')"
        >JavaScript</a
      >
      <a
        :class="{
          active: dispTag == 'css',
        }"
        @click="filter('css')"
        >CSS</a
      >
      <a
        :class="{
          active: dispTag == 'ruby',
        }"
        @click="filter('ruby')"
        >Ruby</a
      >
      <a
        :class="{
          active: dispTag == 'mit',
        }"
        @click="filter('mit')"
        >MIT License</a
      >
      <a
        :class="{
          active: dispTag == 'apache',
        }"
        @click="filter('apache')"
        >Apache-2.0 License</a
      >
      <a
        :class="{
          active: dispTag == 'tool',
        }"
        @click="filter('tool')"
        >ツール</a
      >
      <a
        :class="{
          active: dispTag == 'library',
        }"
        @click="filter('library')"
        >ライブラリ</a
      >
      <a
        :class="{
          active: dispTag == 'framework',
        }"
        @click="filter('framework')"
        >フレームワーク</a
      >
      <a
        :class="{
          active: dispTag == 'game',
        }"
        @click="filter('game')"
        >ゲーム</a
      >
      <a
        :class="{
          active: dispTag == 'extension',
        }"
        @click="filter('extension')"
        >拡張機能</a
      >
    </div>
    <div v-for="repo in disp" :key="repo.title">
      <Card
        :repo="repo"
        :opaque="!hovered || hovered === repo.title"
        @mouse-hover="enter(repo.title)"
        @mouse-blur="leave"
        @open-modal="open(repo.title)"
      ></Card>
      <Modal
        v-if="active === repo.title"
        v-bind:key="repo.github"
        :data="repo"
        @close="close"
      ></Modal>
    </div>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Card from "./components/Card.vue";
import Links from "./components/Links.vue";

import repos from "./assets/repos.json";

export default {
  components: {
    Links,
    Card,
    Modal,
  },
  methods: {
    enter: function (title) {
      this.hovered = title;
    },
    leave: function () {
      this.hovered = null;
    },
    open: function (title) {
      this.active = title;
    },
    close: function () {
      this.active = null;
    },
    filter: function (tag) {
      this.dispTag = tag;
      if (tag === "all") {
        this.disp = this.repos;
      } else {
        this.disp = this.repos.filter((repo) =>
          repo.tags.split(" ").includes(tag)
        );
      }
    },
  },
  mounted() {
    this.filter("all");
  },
  data: function () {
    return {
      hovered: null,
      active: null,
      disp: [],
      dispTag: "all",
      repos,
    };
  },
};
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

.filter {
  width: 100%;
  margin: 30px 20px 10px;
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
  a {
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    &.active {
      font-weight: 600;
      color: #23a6d5;
      background-clip: text;
      background: #ffffff;
    }
  }
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
    margin: 8px 0;
  }
  strong {
    font-weight: 700;
  }
  a {
    color: dodgerblue;
  }
  ul {
    margin: 0;
    li {
      line-height: 1rem;
    }
  }
  pre {
    margin: 0;
    padding: 12px;
    overflow: auto;
    scrollbar-width: thin;
    font-size: 90%;
    background-color: #f0f0f0;
    border-radius: 6px;
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
    margin: 0;
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
}
</style>
