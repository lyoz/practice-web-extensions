const page = document.getElementById('buttonDiv')
const constructOptions = buttonColors => {
  for (const color of buttonColors) {
    const button = document.createElement('button')
    button.style.backgroundColor = color
    button.addEventListener('click', () => {
      chrome.storage.sync.set(
        { color: color },
        () => { console.log(`color is ${color}`) }
      )
    })
    page.appendChild(button)
  }
}
constructOptions([
  '#3aa757',
  '#e8453c',
  '#f9bb2d',
  '#4688f1',
])
