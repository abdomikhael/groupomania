<template>
 <v-app name="app">
  <components :is ="layout">
   <router-view :layout.sync="layout"/>
  </components>
 </v-app>
</template>

<script>

export default {
 name: 'app',

 components: {


 },

 data() {

   return {
     layout:`div`,    }
   },
};
</script>
