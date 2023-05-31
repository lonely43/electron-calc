const { app, BrowserWindow } = require('electron')

const createWindow = () => {
   const win = new   BrowserWindow({
      width: 400,
      minWidth: 400,

      height: 600,
      minHeight: 600,

      webPreferences: {
         nodeIntegration: true
      }
   })
   win.fullScreenable = false

   win.loadFile("./pages/index.html")
}

app.whenReady().then(() => {
   createWindow()

   app.on("activate", () => {
      if(BrowserWindow.getAllWindows().length === 0)
         createWindow()
   })
})

app.on("window-all-closed", () => {
   if(process.platform !== "darwin")
      app.quit()
})