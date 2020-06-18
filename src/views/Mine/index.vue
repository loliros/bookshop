<template>
  <div>
      <div id="Mine">

      </div>
      <TabBar />
  </div>
</template>

<script>
import TabBar from '../../components/TabBar';
export default {
    name : 'Mine',
    components : {
      TabBar,
    },
    data() {
    return {
      stepsActive: 1,
      form: {
        user_phone: '18775903003',
        user_name: 'lajihai',
        user_password: '123456',
        user_password2: '123456',
        code: 1234,
        user_age: '1'
      }
    }
  },
  methods: {
    nextStepBtn() {
      this.stepsActive === 3 ? (this.stepsActive = 0) : this.stepsActive++
    }
  }
}
</script>

<style scope>
#Mine{ height: 90vh;}
.registered {
  padding: 0;
  margin: 0;
}
</style>