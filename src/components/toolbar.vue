<template>
    <div>
        
    <v-app-bar
      color="red"
      dense
      dark
      style="margin-top:24px"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>iMusic</v-toolbar-title>

      <v-spacer style="text-align: center">
          <a href="./af1" style="color: white;margin-right:100px">Home</a>
          <a href="./top8" style="color: white;margin-right:100px">Top 8</a>
          <a href="./trending" style="color: white;margin-right:100px">Trending Now</a>
          <a href="./sobre" style="color: white;margin-right:100px">About</a>
      </v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      left
      temporary
      style="margin-top: 25px"
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
            <v-list-item-title><a href="./af1">Home</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="./top8">Top 8</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="./trending">Trending Now</a></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><a href="./sobre">About</a></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
    
</template>

<script>
export default {
    name: 'AppBar',
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