<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white"> Evangelio San Marcos {{ step }}</q-banner>

    <q-stepper v-model="step" ref="stepper" color="primary" animated contracted>
      <q-step :name="1" prefix="1" title="Cap. 1" caption="Marcos" :done="done1">
        <PanelButtons
          :clickContinue="
            () => {
              done1 = true
              step = 2
            }
          "
          :disableContinue="disbtn1"
          :panelTop="true"
        />
        <MarcosEvang1
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done1 = true
              step = 2
            }
          "
          :disableContinue="disbtn1"
        />
      </q-step>

      <q-step :name="2" prefix="2" title="Cap. 2" caption="Marcos" :done="done2">
        <PanelButtons
          :clickContinue="
            () => {
              done2 = true
              step = 3
            }
          "
          :disableContinue="disbtn2"
          :clickBack="
            () => {
              step = 1
            }
          "
          :panelTop="true"
        />
        <MarcosEvang2
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done2 = true
              step = 3
            }
          "
          :disableContinue="disbtn2"
          :clickBack="
            () => {
              step = 1
            }
          "
        />
      </q-step>

      <q-step :name="3" prefix="3" title="Cap. 3" caption="Marcos" :done="done3">
        <PanelButtons
          :clickContinue="
            () => {
              done3 = true
              step = 4
            }
          "
          :disableContinue="disbtn3"
          :clickBack="
            () => {
              step = 2
            }
          "
          :panelTop="true"
        />

        <MarcosEvang3
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done3 = true
              step = 4
            }
          "
          :disableContinue="disbtn3"
          :clickBack="
            () => {
              step = 2
            }
          "
        />
      </q-step>

      <q-step :name="4" prefix="4" title="Cap. 4" caption="Marcos" :done="done4">
        <PanelButtons
          :clickContinue="
            () => {
              done4 = true
              step = 5
            }
          "
          :disableContinue="disbtn4"
          :clickBack="
            () => {
              step = 3
            }
          "
          :panelTop="true"
        />

        <MarcosEvang4
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done4 = true
              step = 5
            }
          "
          :disableContinue="disbtn4"
          :clickBack="
            () => {
              step = 3
            }
          "
        />
      </q-step>

      <q-step :name="5" prefix="5" title="Cap. 5" caption="Marcos" :done="done5">
        <PanelButtons
          :clickContinue="
            () => {
              done5 = true
              step = 6
            }
          "
          :disableContinue="disbtn5"
          :clickBack="
            () => {
              step = 4
            }
          "
          :panelTop="true"
        />
        <MarcosEvang5
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done5 = true
              step = 6
            }
          "
          :disableContinue="disbtn5"
          :clickBack="
            () => {
              step = 4
            }
          "
        />
      </q-step>

      <q-step :name="6" prefix="6" title="Cap. 6" caption="Marcos" :done="done6">
        <PanelButtons
          :clickContinue="
            () => {
              done6 = true
              step = 7
            }
          "
          :disableContinue="disbtn6"
          :clickBack="
            () => {
              step = 5
            }
          "
          :panelTop="true"
        />
        <MarcosEvang6
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done6 = true
              step = 7
            }
          "
          :disableContinue="disbtn6"
          :clickBack="
            () => {
              step = 5
            }
          "
        />
      </q-step>

      <q-step :name="7" prefix="7" title="Cap. 7" caption="Marcos" :done="done7">
        <PanelButtons
          :clickContinue="
            () => {
              done7 = true
              step = 8
            }
          "
          :disableContinue="disbtn7"
          :clickBack="
            () => {
              step = 6
            }
          "
          :panelTop="true"
        />
        <MarcosEvang7
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done7 = true
              step = 8
            }
          "
          :disableContinue="disbtn7"
          :clickBack="
            () => {
              step = 6
            }
          "
        />
      </q-step>

      <q-step :name="8" prefix="8" title="Cap. 8" caption="Marcos" :done="done8">
        <PanelButtons
          :clickContinue="
            () => {
              done8 = true
              step = 9
            }
          "
          :disableContinue="disbtn8"
          :clickBack="
            () => {
              step = 7
            }
          "
          :panelTop="true"
        />
        <MarcosEvang8
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done8 = true
              step = 9
            }
          "
          :disableContinue="disbtn8"
          :clickBack="
            () => {
              step = 7
            }
          "
        />
      </q-step>

      <q-step :name="9" prefix="9" title="Cap. 9" caption="Marcos" :done="done9">
        <PanelButtons
          :clickContinue="
            () => {
              done9 = true
              step = 10
            }
          "
          :disableContinue="disbtn9"
          :clickBack="
            () => {
              step = 8
            }
          "
          :panelTop="true"
        />

        <MarcosEvang9
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done9 = true
              step = 10
            }
          "
          :disableContinue="disbtn9"
          :clickBack="
            () => {
              step = 8
            }
          "
        />
      </q-step>

      <q-step :name="10" prefix="10" title="Cap. 10" caption="Marcos" :done="done10">
        <PanelButtons
          :clickContinue="
            () => {
              done10 = true
              step = 11
            }
          "
          :disableContinue="disbtn10"
          :clickBack="
            () => {
              step = 9
            }
          "
          :panelTop="true"
        />

        <MarcosEvang10
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done10 = true
              step = 11
            }
          "
          :disableContinue="disbtn10"
          :clickBack="
            () => {
              step = 9
            }
          "
        />
      </q-step>

      <q-step :name="11" prefix="11" title="Cap. 11" caption="Marcos" :done="done11">
        <PanelButtons
          :clickContinue="
            () => {
              done11 = true
              step = 12
            }
          "
          :disableContinue="disbtn11"
          :clickBack="
            () => {
              step = 10
            }
          "
          :panelTop="true"
        />

        <MarcosEvang11
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done11 = true
              step = 12
            }
          "
          :disableContinue="disbtn11"
          :clickBack="
            () => {
              step = 10
            }
          "
        />
      </q-step>

      <q-step :name="12" prefix="12" title="Cap. 12" caption="Marcos" :done="done12">
        <PanelButtons
          :clickContinue="
            () => {
              done12 = true
              step = 13
            }
          "
          :disableContinue="disbtn12"
          :clickBack="
            () => {
              step = 11
            }
          "
          :panelTop="true"
        />

        <MarcosEvang12
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done12 = true
              step = 13
            }
          "
          :disableContinue="disbtn12"
          :clickBack="
            () => {
              step = 11
            }
          "
        />
      </q-step>

      <q-step :name="13" prefix="13" title="Cap. 13" caption="Marcos" :done="done13">
        <PanelButtons
          :clickContinue="
            () => {
              done13 = true
              step = 14
            }
          "
          :disableContinue="disbtn13"
          :clickBack="
            () => {
              step = 12
            }
          "
          :panelTop="true"
        />

        <MarcosEvang13
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done13 = true
              step = 14
            }
          "
          :disableContinue="disbtn13"
          :clickBack="
            () => {
              step = 12
            }
          "
        />
      </q-step>

      <q-step :name="14" prefix="14" title="Cap. 14" caption="Marcos" :done="done14">
        <PanelButtons
          :clickContinue="
            () => {
              done14 = true
              step = 15
            }
          "
          :disableContinue="disbtn14"
          :clickBack="
            () => {
              step = 13
            }
          "
          :panelTop="true"
        />
        <MarcosEvang14
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done14 = true
              step = 15
            }
          "
          :disableContinue="disbtn14"
          :clickBack="
            () => {
              step = 13
            }
          "
        />
      </q-step>

      <q-step :name="15" prefix="15" title="Cap. 15" caption="Marcos" :done="done15">
        <PanelButtons
          :clickContinue="
            () => {
              done15 = true
              step = 16
            }
          "
          :disableContinue="disbtn15"
          :clickBack="
            () => {
              step = 14
            }
          "
          :panelTop="true"
        />

        <MarcosEvang15
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickContinue="
            () => {
              done15 = true
              step = 16
            }
          "
          :disableContinue="disbtn15"
          :clickBack="
            () => {
              step = 14
            }
          "
        />
      </q-step>

      <q-step :name="16" prefix="16" title="Cap. 16" caption="Marcos" :done="done16">
        <PanelButtons
          :clickFinish="
            () => {
              done16 = true
            }
          "
          :clickBack="
            () => {
              step = 15
            }
          "
          :panelTop="true"
        />
        <MarcosEvang16
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <PanelButtons
          :clickFinish="
            () => {
              done16 = true
            }
          "
          :clickBack="
            () => {
              step = 15
            }
          "
        />
      </q-step>
    </q-stepper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PanelButtons from 'src/components/PanelButtons.vue'
import MarcosEvang1 from 'components/MarcosEvang1.vue'
import MarcosEvang2 from 'components/MarcosEvang2.vue'
import MarcosEvang3 from 'components/MarcosEvang3.vue'
import MarcosEvang4 from 'components/MarcosEvang4.vue'
import MarcosEvang5 from 'components/MarcosEvang5.vue'
import MarcosEvang6 from 'components/MarcosEvang6.vue'
import MarcosEvang7 from 'components/MarcosEvang7.vue'
import MarcosEvang8 from 'components/MarcosEvang8.vue'
import MarcosEvang9 from 'components/MarcosEvang9.vue'
import MarcosEvang10 from 'components/MarcosEvang10.vue'
import MarcosEvang11 from 'components/MarcosEvang11.vue'
import MarcosEvang12 from 'components/MarcosEvang12.vue'
import MarcosEvang13 from 'components/MarcosEvang13.vue'
import MarcosEvang14 from 'components/MarcosEvang14.vue'
import MarcosEvang15 from 'components/MarcosEvang15.vue'
import MarcosEvang16 from 'components/MarcosEvang16.vue'
import { Funcs } from 'src/others/funcs'

const { countCaps } = Funcs()

const step = ref(1)

const disbtn1 = ref(true)
const disbtn2 = ref(true)
const disbtn3 = ref(true)
const disbtn4 = ref(true)
const disbtn5 = ref(true)
const disbtn6 = ref(true)
const disbtn7 = ref(true)
const disbtn8 = ref(true)
const disbtn9 = ref(true)
const disbtn10 = ref(true)
const disbtn11 = ref(true)
const disbtn12 = ref(true)
const disbtn13 = ref(true)
const disbtn14 = ref(true)
const disbtn15 = ref(true)
const disbtn16 = ref(true)

const done1 = ref(false)
const done2 = ref(false)
const done3 = ref(false)
const done4 = ref(false)
const done5 = ref(false)
const done6 = ref(false)
const done7 = ref(false)
const done8 = ref(false)
const done9 = ref(false)
const done10 = ref(false)
const done11 = ref(false)
const done12 = ref(false)
const done13 = ref(false)
const done14 = ref(false)
const done15 = ref(false)
const done16 = ref(false)

const handleResult = async (cap) => {
  const caps = await countCaps(cap, 'marcos')

  if ((cap === 1) & (caps === 7)) {
    disbtn1.value = false
  }

  if ((cap === 2) & (caps === 10)) {
    disbtn2.value = false
  }

  if ((cap === 3) & (caps === 10)) {
    disbtn3.value = false
  }

  if ((cap === 4) & (caps === 10)) {
    disbtn4.value = false
  }

  if ((cap === 5) & (caps === 10)) {
    disbtn5.value = false
  }

  if ((cap === 6) & (caps === 10)) {
    disbtn6.value = false
  }

  if ((cap === 7) & (caps === 10)) {
    disbtn7.value = false
  }

  if ((cap === 8) & (caps === 10)) {
    disbtn8.value = false
  }

  if ((cap === 9) & (caps === 10)) {
    disbtn9.value = false
  }

  if ((cap === 10) & (caps === 10)) {
    disbtn10.value = false
  }

  if ((cap === 11) & (caps === 10)) {
    disbtn11.value = false
  }

  if ((cap === 12) & (caps === 10)) {
    disbtn12.value = false
  }

  if ((cap === 13) & (caps === 10)) {
    disbtn13.value = false
  }

  if ((cap === 14) & (caps === 10)) {
    disbtn14.value = false
  }

  if ((cap === 15) & (caps === 10)) {
    disbtn15.value = false
  }

  if ((cap === 16) & (caps === 10)) {
    disbtn16.value = false
  }
}

const enableBtOnLoad = (cap) => {
  switch (cap) {
    case 1:
      disbtn1.value = false
      break
    case 2:
      disbtn2.value = false
      break
    case 3:
      disbtn3.value = false
      break
    case 4:
      disbtn4.value = false
      break
    case 5:
      disbtn5.value = false
      break
    case 6:
      disbtn6.value = false
      break
    case 7:
      disbtn7.value = false
      break
    case 8:
      disbtn8.value = false
      break
    case 9:
      disbtn9.value = false
      break
    case 10:
      disbtn10.value = false
      break
    case 11:
      disbtn11.value = false
      break
    case 12:
      disbtn12.value = false
      break
    case 13:
      disbtn13.value = false
      break
    case 14:
      disbtn14.value = false
      break
    case 15:
      disbtn15.value = false
      break
    case 16:
      disbtn16.value = false
      break

    default:
      break
  }
}
</script>
