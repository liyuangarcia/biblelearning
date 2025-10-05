<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Quiénes se acercaron a Jesús para cuestionarle sobre sus discípulos?'"
      v-bind:options="marcos_cap7_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Qué criticaban los fariseos acerca de los discípulos de Jesús?'"
      v-bind:options="marcos_cap7_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿A qué se referían los fariseos cuando hablaban de lavar las manos?'"
      v-bind:options="marcos_cap7_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué palabra usaban los fariseos para declarar algo como ofrenda a Dios?'"
      v-bind:options="marcos_cap7_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿De dónde dijo Jesús que salen los malos pensamientos y pecados?'"
      v-bind:options="marcos_cap7_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿A qué región fue Jesús después de la discusión con los fariseos?'"
      v-bind:options="marcos_cap7_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué nacionalidad tenía la mujer que suplicó a Jesús por su hija?'"
      v-bind:options="marcos_cap7_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿A quiénes comparó Jesús cuando la mujer le pidió ayuda?'"
      v-bind:options="marcos_cap7_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Qué condición tenía el hombre que llevaron a Jesús en la región de Decápolis?'"
      v-bind:options="marcos_cap7_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué palabra dijo Jesús en arameo cuando sanó al sordo y tartamudo?'"
      v-bind:options="marcos_cap7_options10"
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
  marcos_cap7_options1,
  marcos_cap7_options2,
  marcos_cap7_options3,
  marcos_cap7_options4,
  marcos_cap7_options5,
  marcos_cap7_options6,
  marcos_cap7_options7,
  marcos_cap7_options8,
  marcos_cap7_options9,
  marcos_cap7_options10,
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
    opt1.value = await findResponse(7, 1, 'marcos')
    opt2.value = await findResponse(7, 2, 'marcos')
    opt3.value = await findResponse(7, 3, 'marcos')
    opt4.value = await findResponse(7, 4, 'marcos')
    opt5.value = await findResponse(7, 5, 'marcos')
    opt6.value = await findResponse(7, 6, 'marcos')
    opt7.value = await findResponse(7, 7, 'marcos')
    opt8.value = await findResponse(7, 8, 'marcos')
    opt9.value = await findResponse(7, 9, 'marcos')
    opt10.value = await findResponse(7, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(7, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 7)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(7, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 7)
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
