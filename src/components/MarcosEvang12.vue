<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Qué parábola contó Jesús a los principales sacerdotes, escribas y ancianos?'"
      v-bind:options="marcos_cap12_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿A quién envió finalmente el dueño de la viña pensando que lo respetarían?'"
      v-bind:options="marcos_cap12_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Qué respondió Jesús sobre pagar impuestos al César?'"
      v-bind:options="marcos_cap12_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué grupo religioso que negaba la resurrección preguntó a Jesús?'"
      v-bind:options="marcos_cap12_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Cuántos hermanos se casaron sucesivamente con la misma mujer en la pregunta de los saduceos?'"
      v-bind:options="marcos_cap12_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Qué dijo Jesús sobre Dios en relación con la resurrección?'"
      v-bind:options="marcos_cap12_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Cuáles son los dos mandamientos más importantes según Jesús?'"
      v-bind:options="marcos_cap12_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Cómo llamó Jesús al Cristo en su pregunta sobre el Salmo 110?'"
      v-bind:options="marcos_cap12_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Cuánto dinero echó la viuda pobre en el arca de las ofrendas?'"
      v-bind:options="marcos_cap12_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué dijo Jesús que había echado la viuda pobre en comparación con los ricos?'"
      v-bind:options="marcos_cap12_options10"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op10_1'"
      v-bind:selectedVal="opt10"
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
  marcos_cap12_options1,
  marcos_cap12_options2,
  marcos_cap12_options3,
  marcos_cap12_options4,
  marcos_cap12_options5,
  marcos_cap12_options6,
  marcos_cap12_options7,
  marcos_cap12_options8,
  marcos_cap12_options9,
  marcos_cap12_options10,
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
const opt8 = ref('')
const opt9 = ref('')
const opt10 = ref('')

const loadResponse = async () => {
  try {
    opt1.value = await findResponse(12, 1, 'marcos')
    opt2.value = await findResponse(12, 2, 'marcos')
    opt3.value = await findResponse(12, 3, 'marcos')
    opt4.value = await findResponse(12, 4, 'marcos')
    opt5.value = await findResponse(12, 5, 'marcos')
    opt6.value = await findResponse(12, 6, 'marcos')
    opt7.value = await findResponse(12, 7, 'marcos')
    opt8.value = await findResponse(12, 8, 'marcos')
    opt9.value = await findResponse(12, 9, 'marcos')
    opt10.value = await findResponse(12, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(12, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 12)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(12, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 12)
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
    case 8:
      opt8.value = selectedValue
      break
    case 9:
      opt9.value = selectedValue
      break
    case 10:
      opt10.value = selectedValue
      break
    default:
      break
  }
}
</script>
