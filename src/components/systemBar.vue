<template>
  <div>
    <v-system-bar
      dark
      color="primary"
      fixed
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>12:30</span>
    </v-system-bar>
  </div>
</template>

<script>
    export default {
        name : 'SysBar'
    }
</script>