<style scoped>
  input{
    display: block;
  }
</style>

<template>
  <div>
    Je {{title}} werkt!
    <input type="text" name="name" v-model="title">
  </div>

</template>

<script>
    import Vue from 'vue';
    import Loader from './common/loader.vue';
    Vue.component('loader', Loader);
    export default {
      ready(){
        console.log('Component loaded!');
      },
      data: function(){
        return {
          title: 'component'
        }
      }
    }
</script>
