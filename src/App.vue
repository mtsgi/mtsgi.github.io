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
            "kitDesktopはインストール不要でJavaScript上で完全に動作するオープンソースのデスクトップ環境です。\nすべてのkitアプリケーションはHTML構造にJavaScript、それとJavaScriptを用いたkit apps frameworkを用いて記述されていて、呼び出されるとAjaxでロードされます。\nサーバーサイド技術は用いられていません。",
          bg: "kit.png"
        },
        {
          href: "https://mtsgi.github.io/kitdocs",
          title: "kitドキュメント",
          github: "mtsgi/kitdocs",
          description:
            "kitアプリケーションを作成するためのkitシステム及びkit apps frameworkに関するドキュメントです。\nkitアプリケーションはHTMLと少しのJavaScriptの知識があればすぐに開発することができます。CSSを記述してアプリケーションのスタイルを調整することも可能ですが、kitのスタイルフレームワークであるkitstrapを使用するともっと簡単にアプリケーションのスタイルやレイアウトを組み立てることができます。",
          bg: "kit.png"
        },
        {
          href: "https://mtsgi.github.io/kish/docs",
          title: "kish",
          github: "mtsgi/kish",
          description:
            "kishはkitDesktopのための強力なシェルです。\nkit上で様々なkishコマンドを利用できます。",
          bg: "kish.png"
        },
        {
          href: "https://kpkg.herokuapp.com",
          title: "kpt",
          github: "mtsgi/kpt",
          description:
            "kitアプリパッケージを管理・転送するためのWebアプリケーションです。\nkishからkptコマンドを利用することでkitアプリケーションの簡単に検索・バージョン管理・アップデートが行えます。"
        },
        {
          href: "https://mtsgi.github.io/kitstrap/docs",
          title: "kitstrap",
          github: "mtsgi/kitstrap",
          description:
            "簡単に導入・カスタマイズできる軽量CSSフレームワークです。\n・kitstrapはkitDesktopのデザイン言語に基づいています。\n・kitstrapパッケージではフォントやカーソルの設定はモジュール化されています。\n・kitstrapは!important規則を使用しません。",
          bg: "kitstrap.png"
        },
        {
          href: "https://mtsgi.github.io/garnet",
          title: "Garnet",
          github: "mtsgi/garnet",
          description:
            "GarnetはRubyの処理系を持つプログラミング言語です。\n柔軟な記法と絵文字を含む変数名、記号による簡潔で特徴的な言語記法を実現します。"
        },
        {
          href: "https://mtsgi.github.io/gradator",
          title: "Gradator",
          github: "mtsgi/gradator",
          description:
            "CSS3グラデーションを簡単に作成、保存できるWebアプリケーションです。",
          bg: "gradator.png"
        },
        {
          href: "https://github.com/mtsgi/cpextend",
          title: "Cpex",
          github: "mtsgi/cpextend",
          description:
            "CoursePowerをちょっと便利にしてくれるChrome拡張機能です。",
          bg: "cpex.png"
        },
        {
          href: "https://mtsgi.github.io/nqueen",
          title: "N-Queen",
          github: "mtsgi/nqueen",
          description: "JavaScriptでNクイーン問題を自動的に生成します。"
        },
        {
          href: "https://mtsgi.github.io/kakeibo",
          title: "JS家計簿",
          github: "mtsgi/kakeibo",
          description:
            "DBを使わない(LocalStorageで完結する)軽量クライアントサイド家計簿です。"
        },
        {
          href: "https://github.com/mtsgi/extweet",
          title: "Extweet",
          github: "mtsgi/extweet",
          description:
            "TwitterにWebページや選択テキストを一瞬で共有するChrome拡張です。"
        },
        {
          href: "https://mtsgi.github.io/pizzada",
          title: "ピザ打",
          github: "mtsgi/pizzada",
          description:
            "JavaScriptで動作するシンプルなタイピングゲームです。お皿は流れてきません。"
        },
        {
          href: "https://mtsgi.github.io/happytap",
          title: "Happy Tap",
          github: "mtsgi/happytap",
          description: "2人対戦用のPWA対応のシンプルな連打ゲームです。"
        },
        {
          href: "https://mtsgi.github.io/imageresizer",
          title: "Image Resizer",
          github: "mtsgi/imageresizer",
          description:
            "画像の縦横比を維持しながら画像をリサイズするツールです。\nJavaScriptのcanvas制御で実行するため、画像をサーバーにアップロードする必要がありません。"
        },
        {
          href: "https://mtsgi.github.io/githubtl",
          title: "GitHubTL",
          github: "mtsgi/githubtl",
          description: "ユーザーのGitHubタイムラインを表示できるWebアプリです。"
        },
        {
          href: "https://mtsgi.github.io/insregexp",
          title: "Instant RegExp",
          github: "mtsgi/insregexp",
          description: "正規表現をリアルタイムで評価する簡単なビューワーです。"
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
