<template>
  <div>
    <nav>
      navbar
    </nav>
    Je {{title}} werkt!
    <input type="text" name="name" v-model="title">
  </div>

</template>

<script>
    import Vue from 'vue';
    export default {
      mounted(){
        console.log('Component loaded!');
      },
      data: function(){
        return {
          title: 'component'
        }
      }
    }
</script>
