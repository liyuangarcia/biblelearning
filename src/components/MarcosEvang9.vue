<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿A qué tres discípulos llevó Jesús aparte para la transfiguración?'"
      v-bind:options="marcos_cap9_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿A dónde llevó Jesús a los discípulos para transfigurarse delante de ellos?'"
      v-bind:options="marcos_cap9_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿De qué color se volvieron las vestiduras de Jesús durante la transfiguración?'"
      v-bind:options="marcos_cap9_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué dos personajes del Antiguo Testamento aparecieron hablando con Jesús?'"
      v-bind:options="marcos_cap9_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Qué sugirió Pedro hacer cuando vio a Jesús transfigurado con Moisés y Elías?'"
      v-bind:options="marcos_cap9_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Qué dijo la voz desde la nube durante la transfiguración?'"
      v-bind:options="marcos_cap9_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué tipo de espíritu tenía el muchacho que los discípulos no pudieron sanar?'"
      v-bind:options="marcos_cap9_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Por qué dijo Jesús que los discípulos no pudieron echar fuera el demonio?'"
      v-bind:options="marcos_cap9_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Qué le dijo Jesús al padre del muchacho endemoniado cuando este dijo creer?'"
      v-bind:options="marcos_cap9_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué enseñanza dio Jesús sobre recibir a los niños?'"
      v-bind:options="marcos_cap9_options10"
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
  marcos_cap9_options1,
  marcos_cap9_options2,
  marcos_cap9_options3,
  marcos_cap9_options4,
  marcos_cap9_options5,
  marcos_cap9_options6,
  marcos_cap9_options7,
  marcos_cap9_options8,
  marcos_cap9_options9,
  marcos_cap9_options10,
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
    opt1.value = await findResponse(9, 1, 'marcos')
    opt2.value = await findResponse(9, 2, 'marcos')
    opt3.value = await findResponse(9, 3, 'marcos')
    opt4.value = await findResponse(9, 4, 'marcos')
    opt5.value = await findResponse(9, 5, 'marcos')
    opt6.value = await findResponse(9, 6, 'marcos')
    opt7.value = await findResponse(9, 7, 'marcos')
    opt8.value = await findResponse(9, 8, 'marcos')
    opt9.value = await findResponse(9, 9, 'marcos')
    opt10.value = await findResponse(9, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(9, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 9)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(9, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 9)
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
