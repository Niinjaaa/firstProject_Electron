const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");
require('update-electron-app')()

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1080,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}

ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors)
    {
        nativeTheme.themeSource = 'light'
    }
    else 
    {
        nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
})


app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') 
        app.quit();
})

app.whenReady().then(() => {
    ipcMain.handle('ping', () => 'pong')
    createWindow();
})