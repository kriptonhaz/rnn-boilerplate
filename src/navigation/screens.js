import * as views from './views';

const loading = () => ({
  root: {
    component: views.loading()
  }
})

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
  loading,
  boarding,
  login,
  views
}