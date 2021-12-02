<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
      style="margin-bottom: 60px"
    >
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name : 'FooterComponent',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>