<template>
  <Disclosure as="nav" class="bg-purple-800 shadow" v-slot="{ open }">
    <div class="max-w-7xl mr-auto px-6">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block w-8 h-auto"
              src="../assets/img/black-dot-1.jpg"
              alt="Workflow"
            />
            <router-link class="ml-2 md:hidden" :to="{ name: 'Home' }"
              ><div
                class="
                  text-xl
                  leading-16
                  no-underline
                  text-white
                  hover:text-white
                  mr-6
                  font-sans
                "
              >
                {{ appTitleShort }}
              </div></router-link
            >
          </div>
          <div class="hidden sm:ml-2 sm:flex">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <router-link class="hidden md:block" :to="{ name: 'Home' }"
              ><div
                class="
                  text-xl
                  leading-16
                  no-underline
                  text-white
                  hover:text-white
                  mr-6
                  font-sans
                "
              >
                {{ appTitleLong }}
              </div></router-link
            >
            <router-link
              v-for="(tab, index) in tabsText"
              :key="tab"
              :to="{ name: tabLinks[index] }"
              ><div
                class="
                  h-full
                  w-auto
                  leading-16
                  px-4
                  text-md
                  inline-block
                  no-underline
                  text-white
                  hover:text-white hover:bg-rrblue-400
                "
              >
                {{ tab }}
              </div></router-link
            >
          </div>
        </div>

        <div class="-mr-2 flex items-center md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-rrgrey-400
              hover:text-rrgrey-800 hover:bg-rrgrey-400
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-rrblue-400
            "
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden w-full mb-4">
      <div class="pt-2 pb-3 pl-4 space-y-1 bg-rrgrey-200 shadow-md">
        <router-link
          v-for="(tab, index) in tabsText"
          :key="tab"
          :to="{ name: tabLinks[index] }"
          ><div
            class="
              bg-rrgrey-400
              hover:bg-rrgrey-500 hover:text-black
              border-rrblue-400
              text-rrgrey-800
              block
              pl-3
              pr-4
              py-2
              border-l-4
              text-base
              font-medium
              mb-1
            "
          >
            {{ tab }}
          </div></router-link
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
export default {
  name: "Header",
  components: {
    Disclosure,
    DisclosurePanel,
    DisclosureButton,
    MenuIcon,
    XIcon,
  },
};
</script>

<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const appTitleShort = ref("App Helper");
const appTitleLong = ref("Application Organizer");
const tabsText = ref(["Home", "About"]);
const tabLinks = ref(["Home", "About"]);
</script>
