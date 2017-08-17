<template>
  <div>
    <div class="switch-radio">
      <label>
        <input type="radio" v-model="device" value="iphone"> iPhone</label>
      <label>
        <input type="radio" v-model="device" value="ipad"> iPad</label>
      <label>
        <input type="checkbox" v-model="showToast" value="true"> show toast</label>
      <select v-model="ToastCtn" v-show="showToast">
        <option v-for="i in 10" :value="i" :key="i">{{i}}</option>
      </select>
    </div>
    <div :class="[device,'device']">
      <img v-if="device == 'iphone'" src="../assets/images/iphone.png" alt="">
      <img v-else src="../assets/images/ipad.png" alt="">
      <div class="wrap">
        <header>
          <div class="top-bar">
            <a href="javascript:;" class="iconfont">&#xe697;</a>
            <h1>Mobile Layout Demo Title</h1>
            <a href="javascript:;" class="iconfont">&#xe6ec;</a>
          </div>
        </header>
        <nav class="category-nav">
          <a href="javscript:;" v-for="item in 4" :key="item" :class="{active:item == 2}">menu-{{item}}</a>
        </nav>
  
        <div id="j-scroll" class="container">

          <ol class="chat-list">
            <li class="chat-1">
              <div class="avatar">
                <img src="../assets/images/boy.png" />
              </div>
              <div class="msg-ctn">
                <p>CVTE前端沙龙，今晚彦哥带你玩转flexbox，约吗？</p>
              </div>
            </li>
            <li class="chat-2">
              <div class="avatar">
                <img src="../assets/images/girl.png" />
              </div>
              <div class="msg-ctn">
                <p>约 !</p>
              </div>
            </li>
            <li class="chat-1">
              <div class="avatar">
                <img src="../assets/images/boy.png" />
              </div>
              <div class="msg-ctn">
                <p>18:30 科珠517 你懂的！</p>
              </div>
            </li>
          </ol>
          <div class="search-box">
            <input type="text" class="keyword-ipt" placeholder="CVTE前端沙龙">
            <button class="iconfont">&#xe6ac;</button>
          </div>
          <div class="iconfont sub-menu">
            <a href="javascript:;" :class="{wp48:item == 5 || item == 6 }" v-for="item in 7" :key="item">&#xe7cb;</a>
          </div>
          <ul>
            <li v-for="item in list" :key="item">
              <i class="iconfont">
                &#xe61f;
              </i>
              <h3>
                <span>{{item}}.Mobile Layout Demo Long Title Title Title Title Title Title Title Title</span>
              </h3>
            </li>
          </ul>
          <p v-show="loading" class="loading-tip">正在拼了命地加载...</p>
        </div>
        <footer>
          <nav>
            <a href="javascript:;" class="active">
              <span class="iconfont">&#xe696;</span>
            </a>
            <a href="javascript:;">
              <span class="iconfont">&#xe698;</span>
              <i class="i-tip">2</i>
            </a>
            <a href="javascript:;">
              <span class="iconfont">&#xe6b8;</span>
            </a>
          </nav>
        </footer>
        <div class="mask toast" v-show="showToast">
          <div>
            <i class="iconfont">&#xe6b1;</i>
            <p>
              <span v-for="item in ToastCtn" :key="item">Welcome To CVTE Frontend Salon!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      device: 'iphone',
      list: 10,
      loading: false,
      showToast: false,
      ToastCtn: 1
    }
  },
  methods: {
    loadItems(e) {
      var target = e.srcElement;
      if (!this.loading && target.clientHeight + target.scrollTop + 100 > target.scrollHeight) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.list += 10;
        }, 400)
      }
    }
  },
  mounted() {
    var scroller = document.getElementById('j-scroll');
    scroller.addEventListener('scroll', this.loadItems, false);
  }
}
</script>

<style lang="less" scoped>
@blue: #3da4ff;
@font-face {
  font-family: 'iconfont';
  src: url('../assets/fonts/iconfont.eot');
  src: url('../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/fonts/iconfont.woff') format('woff'),
  url('../assets/fonts/iconfont.ttf') format('truetype'),
  url('../assets/fonts/iconfont.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.switch-radio {
  padding: 30px;
  text-align: center;
  label {
    padding: 0 20px;
  }
}

.device {
  margin: 0 auto 0;
  transition: all ease .5s;
}

.iphone {
  position: relative;
  display: block;
  width: 280px;
  img {
    width: 100%;
  }
  .wrap {
    position: absolute;
    left: 18px;
    right: 18px;
    top: 60px;
    bottom: 70px;
    z-index: 2;
    background: #fff;
  }
}

.ipad {
  position: relative;
  display: block;
  width: 400px;
  img {
    width: 100%;
  }
  .wrap {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 50px;
    bottom: 60px;
    z-index: 2;
    background: #fff;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  header,
  footer {
    height: 36px;
    line-height: 36px;
    background: @blue;
    text-align: center;
  }
  header .top-bar {
    display: flex;
    height: 100%;
    h1 {
      flex: 1;
      font-size: 14px;
      color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    a {
      display: block;
      text-decoration: none;
      flex-basis: 40px;
      color: #fff;
      font-size: 18px;
      &:active {
        opacity: .8;
      }
    }
  }
  footer nav {
    display: flex;
    a {
      flex: 1;
      color: #fff;
      text-decoration: none;
      padding: 0;
      position: relative;
      span {
        display: block;
        font-size: 20px;
      }
      i {
        position: absolute;
        display: block;
        height: 16px;
        width: 16px;
        border-radius: 8px;
        background: #f44336;
        font-style: normal;
        line-height: 16px;
        top: 3px;
        right: 22%;
      }
      &.active {
        background: #63b5fd;
      }
    }
  }
  .container {
    flex: 1;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    background: #f0f0f0;
    padding: 5px 0 5px 5px;
    transform: translate3d(0, 0, 0);
    .sub-menu {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap-reverse;
      a {
        flex: auto;
        display: block;
        width: 23%;
        margin: 1%;
        padding: 6% 0;
        text-decoration: none;
        text-align: center;
        font-size: 26px;
        color: #f7d2be;
        background: #fff;
        &.wp48 {
          width: 48%;
        }
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      li {
        margin: 1%;
        flex-basis: 48%;
        background: #fff;
        list-style: none;
        text-align: center;
        i {
          display: block;
          font-size: 60px;
          padding: 20% 0;
          color: #d1e6f9;
        }
        h3 {
          display: -webkit-box;
          margin: 5px;
          box-sizing: border-box;
          line-height: 1.25;
          color: @blue;
          font-size: 12px;
          font-weight: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }

    .loading-tip {
      text-align: center;
      padding: 10px;
      color: #ea6b18;
    }
    &::-webkit-scrollbar {
      width: 4px;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(61, 164, 255, .3);
      border-radius: 3px;
      transform: rotate3d(0, 0, 0);
    }
  }
  .category-nav {
    display: flex;
    height: 36px;
    line-height: 36px;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    z-index: 2;
    a {
      flex: 1;
      text-decoration: none;
      color: @blue;
      text-align: center;
      font-size: 13px;
      &.active {
        border-bottom: 1px solid @blue;
      }
    }
  }
}

.search-box {
  display: flex;
  margin: 1%;
  background: #fff;

  border: 1px solid #ddd;
  .keyword-ipt {
    display: block;
    flex: 1;
    border: 1px solid #ddd;
    border-right: 0;
    border: 0;
    height: 28px;
    padding: 0 8px;
    &::-webkit-input-placeholder {
      color: #aaa;
    }
  }
  button {
    width: 40px;
    border: 0;
    background: #fff;
    color: @blue;
    &:active {
      opacity: .7;
    }
  }
}

.mask {
  background: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    flex-basis: 70%;
    display: flex;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    line-height: 22px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
    h3 {
      display: block;
    }
    i {
      display: block;
      color: #3d9004;
      font-size: 22px;
      padding-right: 10px;
    }
  }
}

.chat-list {
  li {
    display: flex;
    margin: 15px 0;
    padding: 1%;
    &.chat-1 {
      color: #fff;
       ::before {
        left: -11px;
        border: 6px solid transparent;
        border-right-color: #5ec05c;
      }
    }
    &.chat-2 {
      flex-direction: row-reverse;
      color: #555;
       ::before {
        right: -11px;
        border: 6px solid transparent;
        border-left-color: #fff;
      }
      .msg-ctn {
        background: #fff;
      }
    }
    .avatar {
      flex-shrink: 0;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background: #fff;
    }
    .msg-ctn {
      position: relative;
      border-radius: 5px;
      margin: 0 10px;
      padding: 8px 10px;
      background: #5ec05c;
      &::before {
        content: '';
        position: absolute;
        top: 10px;
        font-size: 0;
      }
    }
  }
}
</style>
