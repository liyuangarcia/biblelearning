<template>
  <div>
    <BloquePreg
      v-bind:number="1"
      v-bind:question="'¿Quién preparó el camino para Jesús según Marcos 1?'"
      v-bind:options="options1"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op1_2'"
    />

    <BloquePreg
      v-bind:number="2"
      v-bind:question="'Marcos 1 cita una profecía del Antiguo Testamento. ¿De qué profeta proviene?'"
      v-bind:options="options2"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op2_1'"
    />

    <BloquePreg
      v-bind:number="3"
      v-bind:question="'Juan el Bautista bautizaba en el río:'"
      v-bind:options="options3"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op3_3'"
    />

    <BloquePreg
      v-bind:number="4"
      v-bind:question="'¿Qué ocurrió inmediatamente después del bautismo de Jesús?'"
      v-bind:options="options4"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op4_2'"
    />

    <BloquePreg
      v-bind:number="5"
      v-bind:question="'¿Cuántos días estuvo Jesús en el desierto?'"
      v-bind:options="options5"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op5_4'"
    />

    <BloquePreg
      v-bind:number="6"
      v-bind:question="'¿Cuál fue el primer mensaje público de Jesús según Marcos?'"
      v-bind:options="options6"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op6_1'"
    />

    <BloquePreg
      v-bind:number="7"
      v-bind:question="'¿A quiénes llamó Jesús como sus primeros discípulos?'"
      v-bind:options="options7"
      @update:selectedOption="handleSelectedOption"
      v-bind:anwser="'op7_3'"
      v-bind:selectedVal="opt7"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BloquePreg from 'components/BloquePreg.vue'

const emit = defineEmits(['update:selectedOption'])

const opt1 = ref('')
const opt2 = ref('')
const opt3 = ref('')
const opt4 = ref('')
const opt5 = ref('')
const opt6 = ref('')
const opt7 = ref('op7_4')

const options1 = ref([
  {
    label: 'Pedro',
    value: 'op1_1',
  },
  {
    label: 'Juan el Bautista',
    value: 'op1_2',
  },
  {
    label: 'Pablo',
    value: 'op1_3',
    class: 'special-option',
  },
  {
    label: 'Isaías',
    value: 'op1_4',
  },
])

const options2 = ref([
  {
    label: 'Isaías',
    value: 'op2_1',
  },
  {
    label: 'Moisés',
    value: 'op2_2',
  },
  {
    label: 'David',
    value: 'op2_3',
  },
  {
    label: 'Jeremías',
    value: 'op2_4',
  },
])

const options3 = ref([
  {
    label: 'Éufrates',
    value: 'op3_1',
  },
  {
    label: 'Tigris',
    value: 'op3_2',
  },
  {
    label: 'Jordán',
    value: 'op3_3',
  },
  {
    label: 'Nilo',
    value: 'op3_4',
  },
])

const options4 = ref([
  {
    label: 'Subió a Jerusalén',
    value: 'op4_1',
  },
  {
    label: 'El Espíritu lo llevó al desierto',
    value: 'op4_2',
  },
  {
    label: 'Fue arrestado',
    value: 'op4_3',
  },
  {
    label: 'Empezó a enseñar en el templo',
    value: 'op4_4',
  },
])

const options5 = ref([
  {
    label: '7',
    value: 'op5_1',
  },
  {
    label: '12',
    value: 'op5_2',
  },
  {
    label: '30',
    value: 'op5_3',
  },
  {
    label: '40',
    value: 'op5_4',
  },
])

const options6 = ref([
  {
    label: '“El Reino de Dios ha llegado; arrepiéntanse y crean en el evangelio.”',
    value: 'op6_1',
  },
  {
    label: '“Yo soy el pan de vida.”',
    value: 'op6_2',
  },
  {
    label: '“Bienaventurados los pobres.”',
    value: 'op6_3',
  },
  {
    label: '“Paz a ustedes.”',
    value: 'op6_4',
  },
])

const options7 = ref([
  {
    label: 'Mateo y Tomás',
    value: 'op7_1',
  },
  {
    label: 'Pedro y Juan',
    value: 'op7_2',
  },
  {
    label: 'Simón (Pedro) y Andrés',
    value: 'op7_3',
  },
  {
    label: 'Felipe y Bartolomé',
    value: 'op7_4',
  },
])

const handleSelectedOption = (questionnum, selectedValue) => {
  emit('update:selectedOption', 1)
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
    default:
      break
  }
}
</script>

<style>
.pregunta {
  font-size: 18px;
  margin-bottom: 10px;
}
.numero {
  font-weight: bold;
  margin-right: 5px;
}
</style>
