<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿A qué aldeas cercanas al Monte de los Olivos llegó Jesús?'"
      v-bind:options="marcos_cap11_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Qué animal mandó Jesús a buscar para su entrada a Jerusalén?'"
      v-bind:options="marcos_cap11_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Qué tendió la multitud en el camino cuando Jesús entraba a Jerusalén?'"
      v-bind:options="marcos_cap11_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué gritaba la multitud durante la entrada triunfal?'"
      v-bind:options="marcos_cap11_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Cuándo maldijo Jesús la higuera?'"
      v-bind:options="marcos_cap11_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Qué le dijo Jesús a la higuera cuando no encontró fruto?'"
      v-bind:options="marcos_cap11_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué hizo Jesús en el templo con los que vendían y compraban?'"
      v-bind:options="marcos_cap11_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Qué dijo Jesús que debería ser su casa según las Escrituras?'"
      v-bind:options="marcos_cap11_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿De quién preguntaron los principales sacerdotes sobre la autoridad de Jesús?'"
      v-bind:options="marcos_cap11_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Qué enseñanza sobre la oración dio Jesús a sus discípulos?'"
      v-bind:options="marcos_cap11_options10"
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
  marcos_cap11_options1,
  marcos_cap11_options2,
  marcos_cap11_options3,
  marcos_cap11_options4,
  marcos_cap11_options5,
  marcos_cap11_options6,
  marcos_cap11_options7,
  marcos_cap11_options8,
  marcos_cap11_options9,
  marcos_cap11_options10,
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
    opt1.value = await findResponse(11, 1, 'marcos')
    opt2.value = await findResponse(11, 2, 'marcos')
    opt3.value = await findResponse(11, 3, 'marcos')
    opt4.value = await findResponse(11, 4, 'marcos')
    opt5.value = await findResponse(11, 5, 'marcos')
    opt6.value = await findResponse(11, 6, 'marcos')
    opt7.value = await findResponse(11, 7, 'marcos')
    opt8.value = await findResponse(11, 8, 'marcos')
    opt9.value = await findResponse(11, 9, 'marcos')
    opt10.value = await findResponse(11, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(11, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 11)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(11, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 11)
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
