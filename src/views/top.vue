<template>
    <v-main>
        <v-btn @click="fetch()">TEST</v-btn>
        <v-row>
            <v-col
                v-for="(data,i) in myCards"
                :key="i"
                cols="12"
                sm="4"
            >
            <card-music :cardiD="i" :cardComplete="data" style="margin-top: 50px"/>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    import CardMusic from '../components/card-music.vue'
    import store from '../store/index.js'

  export default {
    components:{CardMusic},
    data: () => ({

    }),
    computed: {
        myCards() {
            return store.state.cards
        }
    },
    methods:{
        fetch(){
            console.log('teste');
        }
    }
  }
</script>