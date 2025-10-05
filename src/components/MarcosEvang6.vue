<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿A qué ciudad fue Jesús y enseñó en la sinagoga?'"
      v-bind:options="marcos_cap6_options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_1'"
      v-bind:selectedVal="opt1"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'¿Cuál era el oficio de Jesús según los habitantes de Nazaret?'"
      v-bind:options="marcos_cap6_options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
      v-bind:selectedVal="opt2"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'¿A cuántos discípulos envió Jesús de dos en dos?'"
      v-bind:options="marcos_cap6_options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_1'"
      v-bind:selectedVal="opt3"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué les permitió Jesús llevar a los discípulos para el camino?'"
      v-bind:options="marcos_cap6_options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_1'"
      v-bind:selectedVal="opt4"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Qué rey oyó hablar de Jesús porque su nombre se había hecho notorio?'"
      v-bind:options="marcos_cap6_options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_1'"
      v-bind:selectedVal="opt5"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿A quién decía Herodes que había resucitado Jesús?'"
      v-bind:options="marcos_cap6_options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
      v-bind:selectedVal="opt6"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿Cómo fue presentada la cabeza de Juan el Bautista a Herodías?'"
      v-bind:options="marcos_cap6_options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_1'"
      v-bind:selectedVal="opt7"
    />

    <BloquePreg
      v-bind:number="8"
      v-bind:question="'¿Qué alimentos tenía el muchacho que ayudó en la alimentación de los cinco mil?'"
      v-bind:options="marcos_cap6_options8"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op8_1'"
      v-bind:selectedVal="opt8"
    />

    <BloquePreg
      v-bind:number="9"
      v-bind:question="'¿Aproximadamente cuántos hombres comieron en la multiplicación de los panes?'"
      v-bind:options="marcos_cap6_options9"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op9_1'"
      v-bind:selectedVal="opt9"
    />

    <BloquePreg
      v-bind:number="10"
      v-bind:question="'¿Cuántas cestas de pedazos recogieron después de la multiplicación?'"
      v-bind:options="marcos_cap6_options10"
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
  marcos_cap6_options1,
  marcos_cap6_options2,
  marcos_cap6_options3,
  marcos_cap6_options4,
  marcos_cap6_options5,
  marcos_cap6_options6,
  marcos_cap6_options7,
  marcos_cap6_options8,
  marcos_cap6_options9,
  marcos_cap6_options10,
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
    opt1.value = await findResponse(6, 1, 'marcos')
    opt2.value = await findResponse(6, 2, 'marcos')
    opt3.value = await findResponse(6, 3, 'marcos')
    opt4.value = await findResponse(6, 4, 'marcos')
    opt5.value = await findResponse(6, 5, 'marcos')
    opt6.value = await findResponse(6, 6, 'marcos')
    opt7.value = await findResponse(6, 7, 'marcos')
    opt8.value = await findResponse(6, 8, 'marcos')
    opt9.value = await findResponse(6, 9, 'marcos')
    opt10.value = await findResponse(6, 10, 'marcos')
  } catch (error) {
    console.error('Error buscando registro:', error)
    return null
  }
}

const enableBtOnLoad = async () => {
  const caps = await countCaps(6, 'marcos')
  if (caps === 10) emit('update:enableBtOnLoad', 6)
}

const handleSelectedOption = async (questionnum, selectedValue) => {
  await addResponse(6, questionnum, selectedValue, 'marcos')
  emit('update:selectedOption', 6)
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
