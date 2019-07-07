import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: 'your-facebook-app-id-here'
  })
  Vue.prototype.$hello = hello
}
