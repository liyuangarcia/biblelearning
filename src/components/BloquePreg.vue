<template>
  <p class="pregunta">
    <span class="numero">{{ props.number }}.</span> {{ props.question }}
  </p>
  <p>
    <q-option-group
      :disable="disable"
      v-model="opt"
      :options="randomizedOptions"
      @update:model-value="handleSelection"
    >
    </q-option-group>
  </p>
  <div class="q-pb-md">
    <q-banner v-if="!isCorrect" dense rounded class="text-black bg-warning">
      La respuesta correcta es: {{ anwserText }}
    </q-banner>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const disable = ref(false)
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

  selectedVal: {
    type: String,
  },
})

const randomizedOptions = computed(() => {
  // Crear una copia del array para no mutar el original
  const optionsCopy = [...props.options]

  // Algoritmo de Fisher-Yates para mezclar aleatoriamente
  for (let i = optionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]]
  }

  return optionsCopy
})

watch(
  () => props.selectedVal,
  (newVal) => {
    if (newVal) {
      opt.value = newVal
      disable.value = true
      showCorrect(newVal)
    }
  },
)

const showCorrect = (selectedValue) => {
  isCorrect.value = props.anwser != selectedValue ? false : true
  anwserText.value =
    props.anwser != selectedValue
      ? props.options.find((item) => item.value === props.anwser).label
      : null
}
const handleSelection = (selectedValue) => {
  emit('update:selectedOption', props.number, selectedValue)
  showCorrect(selectedValue)
  disable.value = true
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
