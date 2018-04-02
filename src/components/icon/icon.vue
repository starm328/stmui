<template>
  <i class="icomoon" :class="classNames" :style="{'font-size': size + 'px'}"><slot></slot></i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    value: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    }
  },
  computed: {
    classNames () {
      let obj = {}
      obj['stm-icon-' + this.value] = true
      return obj
    }
  }
}
</script>

<style lang="css">
@import "../../res/icomoon/style.css";
.icon{
  position: relative;
}
</style>
