<template>
  <q-separator v-if="!props.panelTop" spaced="21px" />
  <q-btn
    v-if="props.clickFinish"
    @click="props.clickFinish"
    color="primary"
    :label="props.labelFinish"
  />
  <q-btn
    v-if="!props.clickFinish"
    @click="props.clickContinue"
    color="primary"
    :label="props.labelContinue"
    :disable="props.disableContinue"
  />
  <q-btn
    v-if="props.clickBack"
    flat
    @click="props.clickBack"
    color="primary"
    :label="props.labelBack"
    class="q-ml-sm"
  />
  <q-separator v-if="props.panelTop" spaced="21px" />
</template>

<script setup>
//import { ref } from 'vue'

const props = defineProps({
  panelTop: {
    type: Boolean,
    default: false,
  },

  clickFinish: {
    type: Function,
  },

  clickContinue: {
    type: Function,
  },

  clickBack: {
    type: Function,
  },

  labelBack: {
    type: String,
    default: 'Atras',
  },

  labelContinue: {
    type: String,
    default: 'Continuar',
  },

  labelFinish: {
    type: String,
    default: 'Terminar',
  },

  disableContinue: {
    type: Boolean,
  },
})
</script>
<style></style>
