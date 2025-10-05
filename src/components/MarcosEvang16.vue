<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Qué mujeres fueron al sepulcro el primer día de la semana?'"
      v-bind:options="marcos_cap16_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿A qué hora del día fueron las mujeres al sepulcro?'"
      v-bind:options="marcos_cap16_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Qué se decían las mujeres mientras iban al sepulcro?'"
      v-bind:options="marcos_cap16_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué encontraron las mujeres cuando llegaron al sepulcro?'"
      v-bind:options="marcos_cap16_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿A quién vieron las mujeres dentro del sepulcro?'"
      v-bind:options="marcos_cap16_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Qué les dijo el joven a las mujeres acerca de Jesús?'"
      v-bind:options="marcos_cap16_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué mensaje específico debían dar a los discípulos?'"
      v-bind:options="marcos_cap16_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Cómo salieron las mujeres del sepulcro?'"
      v-bind:options="marcos_cap16_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿A quién se apareció Jesús primero después de resucitar?'"
      v-bind:options="marcos_cap16_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Cuál fue la gran comisión que Jesús dio a sus discípulos?'"
      v-bind:options="marcos_cap16_options10"
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
  marcos_cap16_options1,
  marcos_cap16_options2,
  marcos_cap16_options3,
  marcos_cap16_options4,
  marcos_cap16_options5,
  marcos_cap16_options6,
  marcos_cap16_options7,
  marcos_cap16_options8,
  marcos_cap16_options9,
  marcos_cap16_options10,
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
    opt1.value = await findResponse(16, 1, 'marcos')
    opt2.value = await findResponse(16, 2, 'marcos')
    opt3.value = await findResponse(16, 3, 'marcos')
    opt4.value = await findResponse(16, 4, 'marcos')
    opt5.value = await findResponse(16, 5, 'marcos')
    opt6.value = await findResponse(16, 6, 'marcos')
    opt7.value = await findResponse(16, 7, 'marcos')
    opt8.value = await findResponse(16, 8, 'marcos')
    opt9.value = await findResponse(16, 9, 'marcos')
    opt10.value = await findResponse(16, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(16, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 16)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(16, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 16)
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
