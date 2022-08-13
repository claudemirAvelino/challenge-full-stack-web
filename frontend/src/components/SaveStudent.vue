<template>
  <v-container>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="student.name"
          :rules="nameRules"
          label="Nome"
          required
      ></v-text-field>

      <v-text-field
          v-model="student.email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="student.ra"
          :rules="raRules"
          label="RA"
          required
      ></v-text-field>

      <v-text-field
          v-model="student.cpf"
          :rules="cpfRules"
          label="CPF"
          v-maska="'###.###.###-##'"
          required
      ></v-text-field>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="this.save"
      >
        Salvar
      </v-btn>

      <v-btn
          color="error"
          class="mr-4"
          @click="this.goBack"
      >
        Voltar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import StudentService from '@/service/StudentService';

export default {
  name: 'SaveStudent',
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name é obrigatório',
    ],
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+\..+/.test(v) || 'E-mail deve ser valido',
    ],
    raRules: [
        v => !!v || 'Registro Acadêmico é obrigatório',
        v => !isNaN(Number(v)) || 'Registro Acadêmico deve ser um número'
    ],
    cpfRules: [
      v => !!v || 'CPF é obrigatório',
      v => v.length >= 14 || 'Preencha o CPF corretamente'
    ],
    student: {
      id: null,
      name: '',
      email: '',
      ra: '',
      cpf: ''
    }
  }),
  async mounted() {
    const { id } = this.$route.params
    console.log('id', id)
    if(id !== '0'){
      const result = await StudentService.getById(id)
      this.student = result.data;
    }
  },
  methods: {
    async save () {
      try {
        const result = await StudentService.save(this.student)
        if(result.status === 204){
          this.goBack();
        }
      }catch (e) {
        console.log('erro', e.message)
      }
    },
    goBack () {
      this.$router.push('/students')
    },
  }
}
</script>

<style>

</style>
