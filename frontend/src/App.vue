<template>
  <v-app>
    <v-app>
      <v-navigation-drawer
          expand-on-hover
          rail
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://camo.githubusercontent.com/715d4c724d1c96e678b53d694fd081bf75a7980ebf74cbb58428c5b62fab7518/68747470733a2f2f7777772e677275706f612e636f6d2e62722f68732d66732f68756266732f6c6f676f2d677275706f612e706e673f77696474683d333030266e616d653d6c6f676f2d677275706f612e706e67"
              title="GRUPO-A"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/students">
            <v-list-item prepend-icon="mdi-account-multiple" title="Alunos" value="students">
            </v-list-item>
          </router-link>
          <router-link to="/home">
            <v-list-item prepend-icon="mdi-account-multiple" title="home" value="students">
            </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-toolbar class="text-center" title="HOME"></v-toolbar>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <router-view></router-view>

        <!-- Provides the application the proper gutter -->
<!--        <v-container fluid>

          &lt;!&ndash; If using vue-router &ndash;&gt;

        </v-container>-->
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
}
</script>
<style>

</style>