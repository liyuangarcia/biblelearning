<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿A qué región llegó Jesús después de cruzar el mar?'"
      v-bind:options="marcos_cap5_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Qué encontró Jesús al salir de la barca en la región de Gadara?'"
      v-bind:options="marcos_cap5_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿Dónde vivía el endemoniado gadareno?'"
      v-bind:options="marcos_cap5_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué nombre dijo el espíritu inmundo que tenía?'"
      v-bind:options="marcos_cap5_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿A dónde pidieron los demonios entrar cuando Jesús los echó?'"
      v-bind:options="marcos_cap5_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Cómo se llamaba el hombre que vino a Jesús suplicando por su hija?'"
      v-bind:options="marcos_cap5_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Qué cargo tenía Jairo en la comunidad?'"
      v-bind:options="marcos_cap5_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Cuánto tiempo había estado enferma la mujer con flujo de sangre?'"
      v-bind:options="marcos_cap5_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Qué tocó la mujer con flujo de sangre para ser sanada?'"
      v-bind:options="marcos_cap5_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿En qué condición estaba la hija de Jairo cuando llegaron a su casa?'"
      v-bind:options="marcos_cap5_options10"
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
  marcos_cap5_options1,
  marcos_cap5_options2,
  marcos_cap5_options3,
  marcos_cap5_options4,
  marcos_cap5_options5,
  marcos_cap5_options6,
  marcos_cap5_options7,
  marcos_cap5_options8,
  marcos_cap5_options9,
  marcos_cap5_options10,
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
    opt1.value = await findResponse(5, 1, 'marcos')
    opt2.value = await findResponse(5, 2, 'marcos')
    opt3.value = await findResponse(5, 3, 'marcos')
    opt4.value = await findResponse(5, 4, 'marcos')
    opt5.value = await findResponse(5, 5, 'marcos')
    opt6.value = await findResponse(5, 6, 'marcos')
    opt7.value = await findResponse(5, 7, 'marcos')
    opt8.value = await findResponse(5, 8, 'marcos')
    opt9.value = await findResponse(5, 9, 'marcos')
    opt10.value = await findResponse(5, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(5, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 5)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(5, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 5)
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
