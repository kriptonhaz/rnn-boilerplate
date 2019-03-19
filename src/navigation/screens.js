import * as views from './views';

const main = () => ({
  root: {
    stack: {
      children: [
        Login()
      ],
    }
  },
})

const Login = () => ({
  stack: {
    children: [
      views.login()
    ]
  }
})

export {
  main,
  Login
}