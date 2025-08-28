// composables/useMixin.js
import { db } from 'src/db/db'
import { ref } from 'vue'

export function Funcs() {
  const mixinData = ref('Dato del mixin')

  async function countCaps(cap, book) {
    try {
      const count = await db[book].where('cap').equals(cap).count()
      return count
    } catch (error) {
      console.error(`Error contando registro en ${book}:`, error)
      return null
    }
  }

  async function findResponse(cap, question, book) {
    try {
      const record = await db[book].where('[cap+question]').equals([cap, question]).first()
      return (record && record.value) || null
    } catch (error) {
      console.error('Error buscando registro:', error)
      return null
    }
  }

  async function addResponse(cap, questionnum, resp, book) {
    const find = await findResponse(cap, questionnum, book)
    if (find) {
      try {
        await db[book]
          .where('[cap+question]')
          .equals([cap, questionnum])
          .modify((record) => {
            record.value = resp
          })
      } catch (error) {
        console.error('Error en actualización con transformación:', error)
      }
    } else {
      await db[book].add({
        cap: cap,
        question: questionnum,
        value: resp,
      })
    }
  }

  return {
    mixinData,
    countCaps,
    findResponse,
    addResponse,
  }
}
