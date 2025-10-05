<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Qué hacía Jesús en la sinagoga cuando encontró al hombre con la mano paralizada?'"
      v-bind:options="marcos_cap3_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Cómo reaccionaron los fariseos después de que Jesús sanó al hombre en sábado?'"
      v-bind:options="marcos_cap3_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_2'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Por qué Jesús pidió una barca?'"
      v-bind:options="marcos_cap3_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_3'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿A cuántos apóstoles escogió Jesús?'"
      v-bind:options="marcos_cap3_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_3'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Qué nombre les puso Jesús a Jacobo y a Juan?'"
      v-bind:options="marcos_cap3_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Qué decían los escribas que venían de Jerusalén sobre Jesús?'"
      v-bind:options="marcos_cap3_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_2'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'Según Jesús, ¿qué pecado no tiene perdón?'"
      v-bind:options="marcos_cap3_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_2'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿A qué comparó Jesús a un reino dividido?'"
      v-bind:options="marcos_cap3_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'Cuando llegaron la madre y los hermanos de Jesús, ¿qué respondió Él?'"
      v-bind:options="marcos_cap3_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué no puede estar dividido contra sí mismo, según Jesús?'"
      v-bind:options="marcos_cap3_options10"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op10_2'"
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
  marcos_cap3_options1,
  marcos_cap3_options2,
  marcos_cap3_options3,
  marcos_cap3_options4,
  marcos_cap3_options5,
  marcos_cap3_options6,
  marcos_cap3_options7,
  marcos_cap3_options8,
  marcos_cap3_options9,
  marcos_cap3_options10,
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
    opt1.value = await findResponse(3, 1, 'marcos')
    opt2.value = await findResponse(3, 2, 'marcos')
    opt3.value = await findResponse(3, 3, 'marcos')
    opt4.value = await findResponse(3, 4, 'marcos')
    opt5.value = await findResponse(3, 5, 'marcos')
    opt6.value = await findResponse(3, 6, 'marcos')
    opt7.value = await findResponse(3, 7, 'marcos')
    opt8.value = await findResponse(3, 8, 'marcos')
    opt9.value = await findResponse(3, 9, 'marcos')
    opt10.value = await findResponse(3, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(3, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 3)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(3, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 3)
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
