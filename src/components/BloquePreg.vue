<template>
  <p class="pregunta">
    <span class="numero">{{ props.number }}.</span> {{ props.question }}
  </p>
  <p>
    <q-option-group v-model="opt" :options="props.options" @update:model-value="handleSelection">
    </q-option-group>
  </p>
  <q-banner v-if="!isCorrect" dense rounded class="text-white bg-red">
    La respuesta correcta es: {{ anwserText }}
  </q-banner>
</template>

<script setup>
import { ref } from 'vue'

const opt = ref('')
const isCorrect = ref(true)
const anwserText = ref('')
const emit = defineEmits(['update:selectedOption'])
const props = defineProps({
  number: {
    type: Number,
  },

  question: {
    type: String,
    required: true,
  },

  options: {
    type: Array,
  },

  anwser: {
    type: String,
  },
})

const handleSelection = (selectedValue) => {
  emit('update:selectedOption', props.number, selectedValue)
  isCorrect.value = props.anwser != selectedValue ? false : true
  anwserText.value =
    props.anwser != selectedValue
      ? props.options.find((item) => item.value === props.anwser).label
      : null
}
</script>
<style>
.pregunta {
  font-size: 18px;
  margin-bottom: 10px;
}
.numero {
  font-weight: bold;
  margin-right: 5px;
}
</style>
