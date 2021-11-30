<template>
    <v-main>
        <v-row>
            <v-col
                v-for="n in 8"
                :key="n"
                cols="12"
                sm="4"
            >
            <card-music style="margin-top: 50px"/>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    import CardMusic from '../components/card-music.vue'

  export default {
    components:{CardMusic},
    data: () => ({

    }),
  }
</script>