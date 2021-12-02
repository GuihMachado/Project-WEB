<template>
  <v-app id="inspire" style="background-image: url(https://images.wallpaperscraft.com/image/single/concert_crowd_people_134866_1920x1080.jpg);">

    <v-main>
      <h1 style="color: white; margin-left: 10px">{{title}}</h1>
      <v-row>
        <v-col
          v-for="(data,i) in events"
          :key="i"
          cols="12"
          sm="3"
        >
          <main-body :cardiD="i" :cardComplete="data" style="margin-bottom:15px"/>
        </v-col>
      </v-row>
    </v-main>

    <footer-component/>
  </v-app>
</template>

<script>
    import FooterComponent from '../components/footer.vue'
    import MainBody from '../components/mainBody.vue'

  export default {
    components:{FooterComponent, MainBody},
    data(){
      return{
      }
    },
    computed:{
      events(){
        return this.$store.state.events
      },

      title(){
        return this.$store.getters.bigTitle
      }
    },
    methods: {
      fetch(){
        console.log('teste');
      }
    },
    async created(){
      this.$store.dispatch("fecthEvents")
    }
  }
</script>