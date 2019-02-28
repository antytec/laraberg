export function editorReady () {
  return checkElement('.edit-post-layout')
}

export function sidebarReady () {
  return checkElement('.edit-post-sidebar')
}

export async function checkElement (selector) {
  while (document.querySelector(selector) === null) {
    await rafAsync()
  }
  return Promise.resolve(true)
}

function rafAsync () {
  return new Promise(resolve => {
    window.requestAnimationFrame(resolve)
  })
}
