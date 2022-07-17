import { createApp } from 'vue'
import app from './components/app.vue'

function joinContent() {
    console.log("extensions_demo_content_inject_id inject")
    const id = 'extensions_demo_content_inject_id'
    const div = document.createElement('div')
    div.id = id
    document.body?.appendChild(div)
  
    const theApp = createApp(app)
    theApp.mount('#' + id)
  }
  
  joinContent()