<template>
  <div class="min-h-full overflow-auto">
    <div id="app" class="flex flex-col min-h-screen font-sans" style="top: 50%">
      <Header> </Header>
      <div class="page min-h-full">
        <router-view />
      </div>
    </div>
    <Footer> </Footer>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const appText = "Application Organizer";
const route = useRoute();

const pathName = computed(() => route.name);
</script>
<style></style>
