<template>
  <v-form>
    <v-container class="d-flex justify-space-around flex-column flex-sm-row">
      <v-text-field v-model="search">
        <template #label>
          <v-icon style="vertical-align: middle">
          mdi-file-find
        </v-icon>
        </template>
      </v-text-field>
      <v-btn class="register-button" @click="editStudent(0)">
        Cadastrar Aluno
      </v-btn>
    </v-container>
  </v-form>

  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Registro Acadêmico
      </th>
      <th class="text-left">
        Nome
      </th>
      <th class="text-left">
        E-mail
      </th>
      <th class="text-left">
        CPF
      </th>
      <th class="text-left">
        Ações
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="student in students"
        :key="student.name"
    >
      <td>{{ student.ra }}</td>
      <td>{{ student.name }}</td>
      <td>{{ student.email }}</td>
      <td>{{ student.cpf }}</td>
      <td>
        <v-btn
            class="ma-1"
            color="black"
            icon="mdi-pencil"
            @click="editStudent(student.id)"
        ></v-btn>
        <v-btn
            class="ma-1"
            color="black"
            icon="mdi-delete"
            @click="deleteDialog(student.id)"
        ></v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>

  <v-dialog
      v-model="dialog"
      persistent
  >
    <v-card>
      <v-card-text>Tem certeza que deseja excluir esse usuário?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
        >
          Cancelar
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="deleteStudent(this.userId)"
        >
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import StudentService from '@/service/StudentService';
import {
  mdiDelete,
  mdiPencil
} from '@mdi/js'

export default {
  name: 'StudentsList',
  data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete
      },
      search: '',
      students: [
      ],
      dialog: false,
      userId: null,
    }
  },
  async mounted() {
    const students = await StudentService.getAll()
    this.students.push(...students.data)
  },
  methods: {
    deleteDialog(id) {
      this.userId = id;
      this.dialog = true;
    },
    async deleteStudent(id) {
      try {
        const result = await StudentService.deleteStudent(id);
        if(result.status === 204) {
          this.students = this.students.filter(student => student.id !== id);
        }
      } catch (e) {
        console.log('erro', e.message)
      } finally {
        this.dialog = false;
      }
    },
    editStudent(id) {
      this.$router.push(`/save-student/${id}`);
    }
  }
}
</script>

<style>
.register-button {
  height: 55px !important;
  margin-left: 1rem;
}
</style>
