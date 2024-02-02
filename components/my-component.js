// Declarative Rendering: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state

// Reactivity: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.

// Setup: The 'setup' attribute is a hint that makes Vue perform compile-time transforms that allows us to use Composition API with less boilerplate. 
// Imports and top-level variables/functions declared in <script setup> are directly usable in the template

import { ref } from 'vue'
export default {
    setup() {
        const count = ref(0)

        function increment() {
            count.value++
        }

        return { count }
    },
    template: `<div>count is {{ count }}</div>`
}