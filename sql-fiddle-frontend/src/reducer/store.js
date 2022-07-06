import { proxy } from "valtio";


const theme = localStorage.getItem('theme');
const orientation = localStorage.getItem('orientation')
const editorTheme = localStorage.getItem('editorTheme')
export const state = proxy({
  schema: '',
  query: '',
  theme: theme == undefined ? 'dark': theme,
  results: [],
  openSettings: false,
  settings: {
    orientation: orientation ? 'row': orientation,
    editorTheme: editorTheme == undefined ? 'monokai': editorTheme
  }
})