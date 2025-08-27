// db.js
import Dexie from 'dexie'

export const db = new Dexie('biblelearning')
db.version(1).stores({
  marcos: '++id, cap, question, [cap+question], value',
})
