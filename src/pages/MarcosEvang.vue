<template>
  <div class="q-pa-md">
    <q-banner class="bg-primary text-white"> Evangelio San Marcos {{ step }}</q-banner>

    <q-stepper v-model="step" ref="stepper" color="primary" animated contracted>
      <q-step :name="1" prefix="1" title="Cap. 1" caption="Marcos" :done="done1">
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
        <q-separator spaced="21px" />
        <MarcosEvang1
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
        <q-btn
          @click="
            () => {
              done2 = true
              step = 3
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn2"
        />
        <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang2
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn2"
          />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" prefix="3" title="Cap. 3" caption="Marcos" :done="done3">
        <q-btn
          @click="
            () => {
              done3 = true
              step = 4
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn3"
        />
        <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang3
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn3"
          />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="4" prefix="4" title="Cap. 4" caption="Marcos" :done="done4">
        <q-btn
          @click="
            () => {
              done4 = true
              step = 5
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn4"
        />
        <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang4
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn4"
          />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" prefix="5" title="Cap. 5" caption="Marcos" :done="done5">
        <q-btn
          @click="
            () => {
              done5 = true
              step = 6
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn5"
        />
        <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang5
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn5"
          />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="6" prefix="6" title="Cap. 6" caption="Marcos" :done="done6">
        <q-btn
          @click="
            () => {
              done6 = true
              step = 7
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn6"
        />
        <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang6
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn6"
          />
          <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="7" prefix="7" title="Cap. 7" caption="Marcos" :done="done7">
        <q-btn
          @click="
            () => {
              done7 = true
              step = 8
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn7"
        />
        <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang7
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn7"
          />
          <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="8" prefix="8" title="Cap. 8" caption="Marcos" :done="done8">
        <q-btn
          @click="
            () => {
              done8 = true
              step = 9
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn8"
        />
        <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang8
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn8"
          />
          <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="9" prefix="9" title="Cap. 9" caption="Marcos" :done="done9">
        <q-btn
          @click="
            () => {
              done9 = true
              step = 10
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn9"
        />
        <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang9
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn9"
          />
          <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="10" prefix="10" title="Cap. 10" caption="Marcos" :done="done10">
        <q-btn
          @click="
            () => {
              done10 = true
              step = 11
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn10"
        />
        <q-btn flat @click="step = 9" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang10
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn10"
          />
          <q-btn flat @click="step = 9" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="11" prefix="11" title="Cap. 11" caption="Marcos" :done="done11">
        <q-btn
          @click="
            () => {
              done11 = true
              step = 12
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn11"
        />
        <q-btn flat @click="step = 10" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang11
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn11"
          />
          <q-btn flat @click="step = 10" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="12" prefix="12" title="Cap. 12" caption="Marcos" :done="done12">
        <q-btn
          @click="
            () => {
              done12 = true
              step = 13
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn12"
        />
        <q-btn flat @click="step = 11" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang12
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn12"
          />
          <q-btn flat @click="step = 11" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="13" prefix="13" title="Cap. 13" caption="Marcos" :done="done13">
        <q-btn
          @click="
            () => {
              done13 = true
              step = 14
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn13"
        />
        <q-btn flat @click="step = 12" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang13
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn13"
          />
          <q-btn flat @click="step = 12" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="14" prefix="14" title="Cap. 14" caption="Marcos" :done="done14">
        <q-btn
          @click="
            () => {
              done14 = true
              step = 15
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn14"
        />
        <q-btn flat @click="step = 13" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang14
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn14"
          />
          <q-btn flat @click="step = 13" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="15" prefix="15" title="Cap. 15" caption="Marcos" :done="done15">
        <q-btn
          @click="
            () => {
              done15 = true
              step = 16
            }
          "
          color="primary"
          label="Continue"
          :disable="disbtn15"
        />
        <q-btn flat @click="step = 14" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang15
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
            :disable="disbtn15"
          />
          <q-btn flat @click="step = 14" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="16" prefix="16" title="Cap. 16" caption="Marcos" :done="done16">
        <q-btn color="primary" @click="done16 = true" label="Finish" />
        <q-btn flat @click="step = 15" color="primary" label="Back" class="q-ml-sm" />
        <q-separator spaced="21px" />
        <MarcosEvang16
          @update:selectedOption="handleResult"
          @update:enableBtOnLoad="enableBtOnLoad"
        />
        <q-separator />
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
