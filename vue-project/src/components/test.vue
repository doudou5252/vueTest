<template>
  <div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "test",
    data () {
      return {
        cc:''
      }
    },
    mounted () {
      this.testAjax()
    },
    computed:{
      ...mapState(['activity','opp'])
    },
    methods:{
      testAjax (){
        this.$store.dispatch('getActivity',5)

      }
    }
  }
</script>

<style scoped>

</style>
