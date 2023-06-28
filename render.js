document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const Darkmode = await window.Darkmode.toggle();
    document.getElementById('theme-source').innerHTML = Darkmode ? 'Dark' : 'Light'
})

document.getElementById('reset-to-system').addEventListener('click', async () => {
    await window.darkMode.system()
    document.getElementById('theme-source').innerHTML = 'System'
  })