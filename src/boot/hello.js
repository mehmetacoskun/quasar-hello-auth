import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '378960766639652'
  })
  Vue.prototype.$hello = hello
}
