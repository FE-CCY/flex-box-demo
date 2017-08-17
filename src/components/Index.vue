<template>
  <div id="page">
    <h1>Flexible Box Layout</h1>
    <section>
      <h2>1、flex-direction:
        <select v-model="flexDirection.selected">
          <option v-for="(item, index) in flexDirection.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('flexDirection')">Add Item</button>
        <button type="button" @click="remove('flexDirection')">Remove Item</button>
      </h2>
      <div class="flex-box" :style="{flexDirection: flexDirection.selected}">
        <div class="flex-item flex-1" v-for="(item,index) in flexDirection.children" :key="index">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>2、flex-wrap:
        <select v-model="flexWrap.selected">
          <option v-for="(item, index) in flexWrap.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('flexWrap')">Add Item</button>
        <button type="button" @click="remove('flexWrap')">Remove Item</button>
      </h2>
      <div class="flex-box" :style="{flexWrap: flexWrap.selected}">
        <div class="flex-item flex-auto w200" v-for="(item,index) in flexWrap.children" :key="index">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>3、justify-content:
        <select v-model="justifyContent.selected">
          <option v-for="(item, index) in justifyContent.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('justifyContent')">Add Item</button>
        <button type="button" @click="remove('justifyContent')">Remove Item</button>
      </h2>
      <div class="flex-box" :style="{justifyContent: justifyContent.selected}">
        <div class="flex-item w150" v-for="(item,index) in justifyContent.children" :key="index">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>4、align-items:
        <select v-model="alignItems.selected">
          <option v-for="(item, index) in alignItems.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('alignItems')">Add Item</button>
        <button type="button" @click="remove('alignItems')">Remove Item</button>
      </h2>
      <div class="flex-box" :style="{alignItems: alignItems.selected}">
        <div class="flex-item flex-1" v-for="(item,index) in alignItems.children" :key="index" :style="{padding:index*10+10+'px'}">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>5、align-content:
        <select v-model="alignContent.selected">
          <option v-for="(item, index) in alignContent.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('alignContent')">Add Item</button>
        <button type="button" @click="remove('alignContent')">Remove Item</button>
      </h2>
      <div class="flex-box h400" :style="{alignContent: alignContent.selected,flexWrap:'wrap'}">
        <div class="flex-item w150" v-for="(item,index) in alignContent.children" :key="index">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>6、order:
        <select v-model="order.selected">
          <option v-for="(item, index) in order.children + 1" :key="index" :value="index">{{index}}</option>
        </select>
        <button type="button" @click="add('order')">Add Item</button>
        <button type="button" @click="remove('order')">Remove Item</button>
      </h2>
      <div class="flex-box">
        <div :style="{order: index == '0' ? order.selected : index}" :class="[{'flex-item-green': index == '0'},'flex-item flex-1']" v-for="(item,index) in order.children" :key="index">item-{{index+1}}
          <p>order:{{index == '0' ? order.selected : index}}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>7、flex-grow:
        <select v-model="flexGrow.selected">
          <option v-for="item in flexGrow.value" :key="item" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('flexGrow')">Add Item</button>
        <button type="button" @click="remove('flexGrow')">Remove Item</button>
      </h2>
      <div class="flex-box">
        <div :style="{'flexGrow': item == flexGrow.children ? flexGrow.selected : '1'}" :class="[{'flex-item-green': item == flexGrow.children},'flex-item']" v-for="(item,index) in flexGrow.children" :key="index">
          <p>{{item == flexGrow.children? flexGrow.selected : '1'}}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>8、flex-shrink:
        <select v-model="flexShrink.selected">
          <option v-for="item in flexShrink.value" :key="item" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('flexShrink')">Add Item</button>
        <button type="button" @click="remove('flexShrink')">Remove Item</button>
      </h2>
      <div class="flex-box">
        <div :style="{'flexShrink': item == flexShrink.children ? flexShrink.selected : '1'}" :class="[{'flex-item-green': item == flexShrink.children},'flex-item w400']" v-for="(item,index) in flexShrink.children" :key="index">
          <p>{{item == flexShrink.children? flexShrink.selected : '1'}}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>9、flex-basis:
        <select v-model="flexBasis.selected">
          <option v-for="item in flexBasis.value" :key="item" :value="item">{{item}}</option>
        </select>
        <label>
          <input v-model="flexBasis.addWidth" type="checkbox"> width:200px;
        </label>
        <button type="button" @click="add('flexBasis')">Add Item</button>
        <button type="button" @click="remove('flexBasis')">Remove Item</button>
      </h2>
      <div class="flex-box">
        <div :style="{'flexBasis': item == '1' ? flexBasis.selected : '200px'}" :class="[{'flex-item-green': item == '1','w200': flexBasis.addWidth && item == '1'},'flex-item']" v-for="(item,index) in flexBasis.children" :key="index">
          <p>{{item == '1'? flexBasis.selected : '200px'}}</p>
        </div>
        <div class="flex-item flex-1">flex:1</div>
      </div>
    </section>
    <section>
      <h2>10、align-self:
        <select v-model="alignSelf.selected">
          <option v-for="(item, index) in alignSelf.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('alignSelf')">Add Item</button>
        <button type="button" @click="remove('alignSelf')">Remove Item</button>
      </h2>
      <div class="flex-box flex-align-center h400">
        <div :class="[{'flex-item-green': item == '2'},'flex-item flex-1']" v-for="(item,index) in alignSelf.children" :key="index" :style="{alignSelf:index == '1'? alignSelf.selected : 'auto',padding:index*10+10+'px'}">item-{{index+1}}</div>
      </div>
    </section>
    <section>
      <h2>11、display:
        <select v-model="display.selected">
          <option v-for="(item, index) in display.value" :key="index" :value="item">{{item}}</option>
        </select>
        <button type="button" @click="add('display')">Add Item</button>
        <button type="button" @click="remove('display')">Remove Item</button>
      </h2>
      <div :class="['flex-box', {'inline-flex-box': display.selected == 'inline-flex'}]">
        <div class="w100 flex-item" v-for="item in display.children" :key="item">item-{{item}}</div>
      </div>
    </section>
    <section>
      <h2>12、Absolute Center </h2>
      <div class="flex-box flex-center h400">
        <div class="flex-item w100">center</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Flexbox',
  data() {
    return {
      flexDirection: {
        children: 5,
        value: ['row', 'row-reverse', 'column', 'column-reverse'],
        selected: 'row'
      },
      flexWrap: {
        children: 5,
        value: ['nowrap', 'wrap', 'wrap-reverse'],
        selected: 'nowrap'
      },
      justifyContent: {
        children: 3,
        value: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
        selected: 'flex-start'
      },
      alignItems: {
        children: 5,
        value: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        selected: 'flex-start'
      },
      alignContent: {
        children: 20,
        value: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'],
        selected: 'flex-start'
      },
      order: {
        children: 5,
        value: [],
        selected: 0,
      },
      flexGrow: {
        children: 4,
        value: [0, 1, 2, 3, 4, 5],
        selected: 0
      },
      flexShrink: {
        children: 3,
        value: [1, 2, 3, 4, 5],
        selected: 1
      },
      flexBasis: {
        children: 3,
        value: ['auto', '0px', '300px', '50%'],
        selected: 'auto',
        addWidth: false
      },
      alignSelf: {
        children: 5,
        value: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
        selected: 'auto'
      },
      display: {
        children: 5,
        value: ['flex', 'inline-flex'],
        selected: 'flex',
        wrap: false
      }

    }
  },
  methods: {
    add(t) {
      this[t].children++;
    },
    remove(t) {
      this[t].children > 1 && this[t].children--;
    }
  }
}
</script>

<style lang="less" scoped>
#page {
  padding: 80px;
}

section {
  padding: 100px 0;
}

h1 {
  padding: 20px 0;
  text-align: center;
}

h2 {
  text-align: left;
  padding: 20px 0;
}

select {
  font-size: 20px;
  height: 36px;
  width: 200px;
  font-weight: bold;
  vertical-align: middle;
  border: 1px solid #d4d4d4;
}

button {
  height: 36px;
  padding: 0 20px;
  vertical-align: middle;
  font-size: 16px;
  border-radius: 3px;
  color: #333;
  border: 1px solid #d4d4d4;
  background: #ececec;
  background-image: linear-gradient(#f4f4f4, #ececec);
  text-shadow: 1px 1px 0 #fff;
}

button:hover {
  opacity: .9;
}

button:active {
  background-image: linear-gradient(#ececec, #f4f4f4);
  opacity: .8;
}

.flex-box,
.inline-flex-box {
  display: flex;
  background: #f0f0f0;
  padding: 5px;
  .flex-item {
    text-align: center;
    background: #67c5f3;
    color: #fff;
    padding: 20px 0;
    margin: 5px;
    font-weight: bold;

    &:hover {
      opacity: .8;
    }
  }
  .flex-item-green {
    background: #44a55c;
  }
  .flex-auto {
    flex: auto;
  }
}

.inline-flex-box {
  display: inline-flex;
}

.flex-align-center {
  align-items: center;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-1 {
  flex: 1;
}

.w100 {
  width: 100px;
}

.w200 {
  width: 200px;
}

.w400 {
  width: 400px;
}

.w800 {
  width: 800px;
}

.w150 {
  width: 150px;
}

.h200 {
  height: 200px;
}

.h400 {
  height: 400px;
}
</style>
