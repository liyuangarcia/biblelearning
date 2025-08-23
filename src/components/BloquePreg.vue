<template>
  <p class="pregunta">
    <span class="numero">{{ props.number }}.</span> {{ props.question }}
  </p>
  <p>
    <q-option-group
      :disable="disable"
      v-model="opt"
      :options="props.options"
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
import { ref, onMounted } from 'vue'
onMounted(() => {
  if (props.selectedVal) {
    opt.value = props.selectedVal
    disable.value = true
    showCorrect(props.selectedVal)
  }
})
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
