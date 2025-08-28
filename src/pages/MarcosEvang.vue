<template>
  <div class="q-pa-md">
    <q-btn label="Reset" push color="white" text-color="primary" @click="reset" class="q-mb-md" />

    <q-banner class="bg-primary text-white"> Evangelio San Marcos {{ step }}</q-banner>

    <q-stepper v-model="step" ref="stepper" color="primary" animated contracted>
      <q-step :name="1" prefix="1" title="Cap. 1" caption="Marcos" :done="done1">
        <MarcosEvang1
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done1 = true
                step = 2
              }
            "
            color="primary"
            label="Continuar"
            :disable="disbtn1"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="2" prefix="2" title="Cap. 2" caption="Marcos" :done="done2">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done2 = true
                step = 3
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" prefix="3" title="Cap. 3" caption="Marcos" :done="done3">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done3 = true
                step = 4
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" prefix="4" title="Cap. 4" caption="Marcos" :done="done4">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done4 = true
                step = 5
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" prefix="5" title="Cap. 5" caption="Marcos" :done="done5">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done5 = true
                step = 6
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="6" prefix="6" title="Cap. 6" caption="Marcos" :done="done6">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done6 = true
                step = 7
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="7" prefix="7" title="Cap. 7" caption="Marcos" :done="done7">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done7 = true
                step = 8
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="8" prefix="8" title="Cap. 8" caption="Marcos" :done="done8">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done8 = true
                step = 9
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="9" prefix="9" title="Cap. 9" caption="Marcos" :done="done9">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done9 = true
                step = 10
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="10" prefix="10" title="Cap. 10" caption="Marcos" :done="done10">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done10 = true
                step = 11
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 9" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="11" prefix="11" title="Cap. 11" caption="Marcos" :done="done11">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done11 = true
                step = 12
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 10" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="12" prefix="12" title="Cap. 12" caption="Marcos" :done="done12">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done12 = true
                step = 13
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 11" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="13" prefix="13" title="Cap. 13" caption="Marcos" :done="done13">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done13 = true
                step = 14
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 12" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="14" prefix="14" title="Cap. 14" caption="Marcos" :done="done14">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done14 = true
                step = 15
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 13" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="15" prefix="15" title="Cap. 15" caption="Marcos" :done="done15">
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done15 = true
                step = 16
              }
            "
            color="primary"
            label="Continue"
          />
          <q-btn flat @click="step = 14" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="16" prefix="16" title="Cap. 16" caption="Marcos" :done="done16">
        FINAL

        <q-stepper-navigation>
          <q-btn color="primary" @click="done16 = true" label="Finish" />
          <q-btn flat @click="step = 15" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MarcosEvang1 from 'components/MarcosEvang1.vue'
import { Funcs } from 'src/others/funcs'

const { countCaps } = Funcs()

const step = ref(1)
const disbtn1 = ref(true)
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

const reset = () => {
  done1.value = false
  done2.value = false
  done3.value = false
  done4.value = false
  done5.value = false
  done6.value = false
  done7.value = false
  done8.value = false
  done9.value = false
  done10.value = false
  done11.value = false
  done12.value = false
  done13.value = false
  done14.value = false
  done15.value = false
  done16.value = false
  step.value = 1
}

const handleResult = async (cap) => {
  const cap1 = await countCaps(cap, 'marcos')
  console.log('cap1', cap1)
  if (cap1 === 7) {
    disbtn1.value = false
  }
}

const enableBtOnLoad = (cap) => {
  switch (cap) {
    case 1:
      disbtn1.value = false
      break

    default:
      break
  }
}
</script>
