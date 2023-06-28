const { contextBridgen, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
    toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
    system: () => ipcRenderer.invoke('dark-mode:system')
})