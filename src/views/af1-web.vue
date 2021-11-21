<template>
  <v-app id="inspire">
    <system-bar/>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Item 3</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Item 4</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <main-body/>
    </v-main>

    <footer-component/>

    <bottom-nav/>
  </v-app>
</template>

<script>
    import FooterComponent from '../components/footer.vue'
    import BottomNav from '../components/bottom-nav.vue'
    import SystemBar from '../components/systemBar.vue'
    import MainBody from '../components/mainBody.vue'

  export default {
    components:{FooterComponent, BottomNav, SystemBar, MainBody},
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>