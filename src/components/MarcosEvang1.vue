<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Quién preparó el camino para Jesús según Marcos 1?'"
      v-bind:options="marcos_cap1_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_2'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'Marcos 1 cita una profecía del Antiguo Testamento. ¿De qué profeta proviene?'"
      v-bind:options="marcos_cap1_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'Juan el Bautista bautizaba en el río:'"
      v-bind:options="marcos_cap1_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_3'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué ocurrió inmediatamente después del bautismo de Jesús?'"
      v-bind:options="marcos_cap1_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_2'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Cuántos días estuvo Jesús en el desierto?'"
      v-bind:options="marcos_cap1_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_4'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Cuál fue el primer mensaje público de Jesús según Marcos?'"
      v-bind:options="marcos_cap1_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿A quiénes llamó Jesús como sus primeros discípulos?'"
      v-bind:options="marcos_cap1_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_3'"
      v-bind:selectedVal="opt7"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BloquePreg from 'components/BloquePreg.vue'
import { Funcs } from 'src/others/funcs'
import { Options } from 'src/others/options'

const { countCaps, findResponse, addResponse } = Funcs()
const {
  marcos_cap1_options1,
  marcos_cap1_options2,
  marcos_cap1_options3,
  marcos_cap1_options4,
  marcos_cap1_options5,
  marcos_cap1_options6,
  marcos_cap1_options7,
} = Options()

onMounted(async () => {
  await loadResponse()
  await enableBtOnLoad()
})

const emit = defineEmits(['update:selectedOption', 'update:enableBtOnLoad'])

const opt1 = ref('')
const opt2 = ref('')
const opt3 = ref('')
const opt4 = ref('')
const opt5 = ref('')
const opt6 = ref('')
const opt7 = ref('')

const loadResponse = async () => {
  try {
    opt1.value = await findResponse(1, 1, 'marcos')
    opt2.value = await findResponse(1, 2, 'marcos')
    opt3.value = await findResponse(1, 3, 'marcos')
    opt4.value = await findResponse(1, 4, 'marcos')
    opt5.value = await findResponse(1, 5, 'marcos')
    opt6.value = await findResponse(1, 6, 'marcos')
    opt7.value = await findResponse(1, 7, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(1, 'marcos')
  if (caps === 7) emit('update:enableBtOnLoad', 1)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(1, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 1)
  switch (questionnum) {
    case 1:
      opt1.value = selectedValue
      break
    case 2:
      opt2.value = selectedValue
      break
    case 3:
      opt3.value = selectedValue
      break
    case 4:
      opt4.value = selectedValue
      break
    case 5:
      opt5.value = selectedValue
      break
    case 6:
      opt6.value = selectedValue
      break
    case 7:
      opt7.value = selectedValue
      break
    default:
      break
  }
}
</script>
