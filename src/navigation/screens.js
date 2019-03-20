import * as views from './views';

const boarding = () => ({
  root: {
    component: views.boarding()
  },
})

const login = () =>({
  root: {
    stack: {
      children: [{
        component: views.login()
      }]
    }
  },
})

export {
  boarding,
  login,
  views
}