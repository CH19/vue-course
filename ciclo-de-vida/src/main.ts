// import './assets/main.css'

import { createApp, type DirectiveBinding } from 'vue'
import App from './App.vue'

// creando nuestra primera directiva 

const app = createApp(App)

app.directive('font-size', {
    beforeMount: (el, biding: DirectiveBinding<number>) => {
        el.style.fontSize = biding.value + 'px';
        el.style.fontWeight = 'bold';   
    }
});
app.directive('custom-size', (el, biding) => {

    let size = 18;
    switch(biding.arg){
        case 'sm':{
            size = 10;
            break;
        };
        case 'lg': {
            size = 24;
            break;
        };
        case 'xl': {
            size = 30;
            break;
        }        
        case 'xxl': {
            size = 34;
            break;
        }
    }
    if(biding.modifiers.red){
        el.style.color = 'red';
    };
    el.style.fontSize = `${size}px`;
})

app.mount('#app')
