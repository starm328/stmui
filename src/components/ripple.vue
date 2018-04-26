<template>
  <button @click="reppleClick"  class="__cov-button-ripple"  >
    <span class="__cov-ripple" :class="{'animate': repple_button.animate}"></span>
  </button>
</template>

<script>
export default {
  data () {
    return {
      repple_button: {
        animate: false,
        toggle: false
      }
    }
  },
  methods: {
    reppleClick (e) {
      this.repple_button.animate = true
      let button = e.target
      let ripple = button.querySelector('.__cov-ripple')
      if (ripple) {
        let d = Math.max(button.offsetHeight, button.offsetWidth)
        let x = e.layerX - ripple.offsetWidth / 2
        let y = e.layerY - ripple.offsetHeight / 2
        ripple.setAttribute('style', 'height: ' + d + 'px; width: ' + d + 'px; top: ' + y + 'px; left: ' + x + 'px;')
      }
      this.$nextTick(() => {
        setTimeout(() => {
          this.repple_button.animate = false
        }, 660)
      })
    }
  }
}
</script>

<style>
.__cov-button-ripple {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  border:none;
  background: none;
  outline: none
}
.__cov-ripple {
  display: block;
  position: absolute;
  background: hsla(0, 0%, 65%, 0.66);
  border-radius: 100%;
  transform: scale(0);
}
.__cov-ripple.animate {
  animation: ripple 0.65s linear;
}

@keyframes ripple {
  100% {opacity: 0; transform: scale(2.5);}
}
</style>
