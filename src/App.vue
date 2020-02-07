<template>
  <div id="app">
    <Links></Links>
    <template v-for="repo in repos">
      <div
        :key="repo.title"
        @mouseenter="enter(repo.title)"
        @mouseleave="leave"
      >
        <div
          class="card"
          :class="{ transparent: hovered != '' && repo.title != hovered }"
          :style="`background-image: url(bg/${repo.bg || 'image.png'})`"
        >
          <div class="d">
            <h3>{{ repo.title }}</h3>
            <h4>{{ repo.github }}</h4>
            <div class="card-footer">
              <a @click.prevent="open(repo.title)">DETAILS</a>
              <a :href="repo.href" target="_blank" class="card-ext">OPEN</a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        v-show="active == repo.title"
        v-bind:key="repo.github"
        :data="repo"
        @close="close"
      ></Modal>
    </template>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
import Links from "./components/Links.vue";

export default {
  name: "app",
  components: {
    Links,
    Modal
  },
  methods: {
    enter: function(title) {
      this.hovered = title;
    },
    leave: function() {
      this.hovered = "";
    },
    open: function(title) {
      this.active = title;
    },
    close: function() {
      this.active = "";
    }
  },
  data: function() {
    return {
      hovered: "",
      active: "",
      repos: [
        {
          href: "https://mtsgi.github.io/kit",
          title: "kitDesktop",
          github: "mtsgi/kit",
          description:
            "kitDesktopはインストール不要でJavaScript上で完全に動作するオープンソースのデスクトップ環境です。すべてのkitアプリケーションはHTML構造にJavaScript、それとJavaScriptを用いたkit apps frameworkを用いて記述されていて、呼び出されるとAjaxでロードされます。サーバーサイド技術は用いられていません。",
          bg: "kit.png"
        },
        {
          href: "https://mtsgi.github.io/kitdocs",
          title: "kitドキュメント",
          github: "mtsgi/kitdocs",
          description:
            "kitアプリケーションはHTMLと少しのJavaScriptの知識があればすぐに開発することができます。CSSを記述してアプリケーションのスタイルを調整することも可能ですが、kitのスタイルフレームワークであるkitstrapを使用するともっと簡単にアプリケーションのスタイルやレイアウトを組み立てることができます。",
          bg: "kit.png"
        },
        {
          href: "https://mtsgi.github.io/kish",
          title: "kish",
          github: "mtsgi/kish",
          description: "kishはkitDesktopのための強力なシェルです",
          bg: "kish.png"
        },
        {
          href: "https://kithub-beta.herokuapp.com",
          title: "kpt",
          github: "mtsgi/kithub",
          description: "kitアプリパッケージを転送およびkishからバージョン管理"
        },
        {
          href: "https://mtsgi.github.io/kitstrap",
          title: "kitstrap",
          github: "mtsgi/kitstrap",
          description: "簡単に導入・カスタマイズできる軽量CSSフレームワーク",
          bg: "kitstrap.png"
        },
        {
          href: "https://mtsgi.github.io/gradator",
          title: "Gradator",
          github: "mtsgi/gradator",
          description: "CSS3グラデーションを簡単に作成します",
          bg: "gradator.png"
        },
        {
          href: "https://github.com/mtsgi/cpextend",
          title: "Cpex",
          github: "mtsgi/cpextend",
          description: "CoursePowerをちょっと便利にするChrome拡張",
          bg: "cpex.png"
        },
        {
          href: "https://mtsgi.github.io/nqueen",
          title: "N-Queen",
          github: "mtsgi/nqueen",
          description: "Nクイーン問題を自動的に生成します"
        },
        {
          href: "https://mtsgi.github.io/kakeibo",
          title: "JS家計簿",
          github: "mtsgi/kakeibo",
          description: "DBを使わない軽量クライアントサイド家計簿"
        },
        {
          href: "https://github.com/mtsgi/extweet",
          title: "Extweet",
          github: "mtsgi/extweet",
          description: "Twitterにページやテキストを一瞬で共有するChrome拡張"
        },
        {
          href: "https://mtsgi.github.io/pizzada",
          title: "ピザ打",
          github: "mtsgi/pizzada",
          description: "JavaScriptで動作するシンプルなタイピングゲーム"
        },
        {
          href: "https://mtsgi.github.io/happytap",
          title: "Happy Tap",
          github: "mtsgi/happytap",
          description: "2人対戦用のPWA対応シンプル連打ゲーム"
        },
        {
          href: "https://mtsgi.github.io/imageresizer",
          title: "Image Resizer",
          github: "mtsgi/imageresizer",
          description: "画像の縦横比を維持して画像をリサイズするツール"
        },
        {
          href: "https://mtsgi.github.io/githubtl",
          title: "GitHubTL",
          github: "mtsgi/githubtl",
          description: "ユーザーのGitHubタイムラインを表示します"
        },
        {
          href: "https://mtsgi.github.io/insregexp",
          title: "Instant RegExp",
          github: "mtsgi/insregexp",
          description: "正規表現をリアルタイムで評価するビューワー"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#app {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}

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
  transition: 0.2s all ease-in-out;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  background-position-x: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.3);
  }
  h3 {
    margin: 0;
  }
  h4 {
    color: #909090;
    font-size: 16px;
    margin: 0;
    margin-bottom: 10px;
  }
  .card-footer {
    display: flex;
    font-size: 18px;
    a {
      text-decoration: none;
      width: 50%;
      background: #ffffff;
      border: 1px solid dodgerblue;
      text-align: center;
      color: dodgerblue;
      margin-right: 8px;
      padding: 5px 0;
      border-radius: 4px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
      transition: 0.2s all ease-in-out;
      &.card-ext {
        margin: 0;
        background: dodgerblue;
        color: #ffffff;
        &:hover {
          border-color: #1673d1;
          background: #1673d1;
        }
      }
      &:hover {
        background: #f0f0f0;
      }
    }
  }
  .fa-github {
    position: absolute;
    right: 10px;
    font-size: 30px;
    transition: 0.1s all ease;
    &:hover {
      transform: scale(1.2);
    }
  }
}

.d {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  bottom: 0px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.2);
}
</style>
