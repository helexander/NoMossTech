export default {
    emits: ['response'],
    setup(props, { emit }) {
        emit('response', 'hello from child')
        return {}
    },
    template: `<slot>Fallback content</slot>`
}