//https://electron-react-boilerplate.js.org/docs/electron-store
//https://www.npmjs.com/package/electron-store
import { ipcMain } from 'electron'
import Store from 'electron-store'

const store = new Store()

// IPC listener
ipcMain.on('electron-store-get', async (event, val) => {
  event.returnValue = store.get(val)
})

ipcMain.on('electron-store-set', async (event, key, val) => {
  store.set(key, val)
})
