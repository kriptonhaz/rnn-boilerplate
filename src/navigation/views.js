import * as parts from './parts';

export const boarding = () => ({
  id: 'Boarding',
  name: 'Boarding',
  options: {
    topBar: {
      title: {
        text: 'Boarding'
      }
    },
    animations: {
      push: parts.animationPush()
    }
  }
});

export const login = () => ({
  id: 'Login',
  name: 'Login',
  options: {
    topBar: {
      title: {
        text: 'Login'
      }
    },
    animations: {
      setRoot: parts.animationSetRoot(),
      push: parts.animationPush(),
      pop: parts.animationPop()
    },
  }
});

export const forgotPassword = () => ({
  component: {
    id: 'ForgotPassword',
    name: 'ForgotPassword',
    options: {
      topBar: {
        title: {
          text: 'ForgotPassword'
        }
      },
      animations: {
        push: parts.animationPush(),
        pop: parts.animationPop()
      },
    }
  }
})