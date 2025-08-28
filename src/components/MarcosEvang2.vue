<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Qué hicieron los amigos del paralítico para llevarlo ante Jesús?'"
      v-bind:options="marcos_cap2_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_3'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Qué dijo Jesús al paralítico antes de sanarlo físicamente?'"
      v-bind:options="marcos_cap2_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_3'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Por qué criticaban los escribas a Jesús cuando sanó al paralítico?'"
      v-bind:options="marcos_cap2_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_2'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Quién era Leví (Mateo)?'"
      v-bind:options="marcos_cap2_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_3'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Qué hizo Leví cuando Jesús lo llamó?'"
      v-bind:options="marcos_cap2_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_2'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Por qué los fariseos criticaban a Jesús cuando comía con publicanos y pecadores?'"
      v-bind:options="marcos_cap2_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_3'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué respondió Jesús cuando lo criticaron por comer con pecadores?'"
      v-bind:options="marcos_cap2_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_2'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Por qué los discípulos de Jesús no ayunaban como los de Juan?'"
      v-bind:options="marcos_cap2_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_2'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Qué significa la comparación del vino nuevo en odres viejos?'"
      v-bind:options="marcos_cap2_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué hacían los discípulos en sábado que causó quejas?'"
      v-bind:options="marcos_cap2_options10"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op10_1'"
      v-bind:selectedVal="opt10"
    />

    <BloquePreg
      v-bind:number="11"
      v-bind:question="'¿Qué ejemplo usó Jesús para defender a sus discípulos en sábado?'"
      v-bind:options="marcos_cap2_options11"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op11_3'"
      v-bind:selectedVal="opt11"
    />

    <BloquePreg
      v-bind:number="12"
      v-bind:question="'¿Qué enseñó Jesús sobre el sábado?'"
      v-bind:options="marcos_cap2_options12"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op12_2'"
      v-bind:selectedVal="opt12"
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
  marcos_cap2_options1,
  marcos_cap2_options2,
  marcos_cap2_options3,
  marcos_cap2_options4,
  marcos_cap2_options5,
  marcos_cap2_options6,
  marcos_cap2_options7,
  marcos_cap2_options8,
  marcos_cap2_options9,
  marcos_cap2_options10,
  marcos_cap2_options11,
  marcos_cap2_options12,
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
const opt11 = ref('')
const opt12 = ref('')

const loadResponse = async () => {
  try {
    opt1.value = await findResponse(2, 1, 'marcos')
    opt2.value = await findResponse(2, 2, 'marcos')
    opt3.value = await findResponse(2, 3, 'marcos')
    opt4.value = await findResponse(2, 4, 'marcos')
    opt5.value = await findResponse(2, 5, 'marcos')
    opt6.value = await findResponse(2, 6, 'marcos')
    opt7.value = await findResponse(2, 7, 'marcos')
    opt8.value = await findResponse(2, 8, 'marcos')
    opt9.value = await findResponse(2, 9, 'marcos')
    opt10.value = await findResponse(2, 10, 'marcos')
    opt11.value = await findResponse(2, 11, 'marcos')
    opt12.value = await findResponse(2, 12, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(2, 'marcos')
  if (caps === 12) emit('update:enableBtOnLoad', 2)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(2, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 2)
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
    case 11:
      opt11.value = selectedValue
      break
    case 12:
      opt12.value = selectedValue
      break
    default:
      break
  }
}
</script>
