<template>
  <v-app id="inspire" style="background-image: url(https://images.wallpaperscraft.com/image/single/concert_crowd_people_134866_1920x1080.jpg);">

    <v-main>
      <main-body/>
    </v-main>

    <footer-component/>
  </v-app>
</template>

<script>
    import FooterComponent from '../components/footer.vue'
    import MainBody from '../components/mainBody.vue'

  export default {
    components:{FooterComponent, MainBody},
    data: () => ({

    }),
  }
</script>