export const animationPop = () => ({
  enabled: true,
  content: {
    x: {
      from: 0,
      to: 1000,
      duration: 300,
      interpolation: 'decelerate',
    }
  }
});

export const animationPush = () => ({
  enabled: true,
  content: {
    x: {
      from: 1000,
      to: 0,
      duration: 300,
      interpolation: 'decelerate',
    }
  }
});

export const animationSetRoot = () => ({
  enable: true,
  waitForRender: true,
  x: {
    from: 1000,
    to: 0,
    duration: 300,
    interpolation: 'decelerate',
  },
  alpha: {
    from: 0,
    to: 1,
    duration: 500,
    interpolation: 'accelerate',
  }
})