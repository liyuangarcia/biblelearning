<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿A cuántas personas alimentó Jesús en la segunda multiplicación de panes?'"
      v-bind:options="marcos_cap8_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Qué alimentos tenía Jesús para alimentar a la multitud?'"
      v-bind:options="marcos_cap8_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Cuántas cestas de sobras recogieron después de la segunda multiplicación?'"
      v-bind:options="marcos_cap8_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿A qué región llegó Jesús después de la segunda multiplicación?'"
      v-bind:options="marcos_cap8_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Contra qué advirtió Jesús a sus discípulos que se guardaran?'"
      v-bind:options="marcos_cap8_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Dónde sanó Jesús al ciego que fue llevado a él?'"
      v-bind:options="marcos_cap8_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Cómo sanó Jesús al ciego en Betsaida?'"
      v-bind:options="marcos_cap8_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿En qué región preguntó Jesús a sus discípulos quién decía la gente que era él?'"
      v-bind:options="marcos_cap8_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Qué respondió Pedro cuando Jesús preguntó: Y vosotros, ¿quién decís que soy yo?'"
      v-bind:options="marcos_cap8_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué dijo Jesús que debe hacer cualquiera que quiera seguirle?'"
      v-bind:options="marcos_cap8_options10"
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
  marcos_cap8_options1,
  marcos_cap8_options2,
  marcos_cap8_options3,
  marcos_cap8_options4,
  marcos_cap8_options5,
  marcos_cap8_options6,
  marcos_cap8_options7,
  marcos_cap8_options8,
  marcos_cap8_options9,
  marcos_cap8_options10,
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
    opt1.value = await findResponse(8, 1, 'marcos')
    opt2.value = await findResponse(8, 2, 'marcos')
    opt3.value = await findResponse(8, 3, 'marcos')
    opt4.value = await findResponse(8, 4, 'marcos')
    opt5.value = await findResponse(8, 5, 'marcos')
    opt6.value = await findResponse(8, 6, 'marcos')
    opt7.value = await findResponse(8, 7, 'marcos')
    opt8.value = await findResponse(8, 8, 'marcos')
    opt9.value = await findResponse(8, 9, 'marcos')
    opt10.value = await findResponse(8, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(8, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 8)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(8, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 8)
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
