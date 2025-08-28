import { ref } from 'vue'

export function Options() {
  const marcos_cap1_options1 = ref([
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

  const marcos_cap1_options2 = ref([
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

  const marcos_cap1_options3 = ref([
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

  const marcos_cap1_options4 = ref([
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

  const marcos_cap1_options5 = ref([
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

  const marcos_cap1_options6 = ref([
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

  const marcos_cap1_options7 = ref([
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

  return {
    marcos_cap1_options1,
    marcos_cap1_options2,
    marcos_cap1_options3,
    marcos_cap1_options4,
    marcos_cap1_options5,
    marcos_cap1_options6,
    marcos_cap1_options7,
  }
}
