export const keyframes = {
  'slide-in-down': {
    '0%': {
      transform: 'translateY(-50%)',
      opacity: '0',
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: '1',
    },
  },
  'slide-out-up': {
    '0%': {
      transform: 'translateY(0)',
      opacity: '1',
    },
    '100%': {
      transform: 'translateY(-50%)',
      opacity: '0',
    },
  },
  'fade-in-left': {
    '0%': {
      opacity: '0',
      transform: 'translateX(-2rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },
  'fade-in-right': {
    '0%': {
      opacity: '0',
      transform: 'translateX(2rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },
  'fade-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(2rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
  'move-from-left': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  'move-from-right': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  opacity: {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
  'dot-pattern-shimmer': {
    '0%': {
      'mask-position': '-25% 0%',
      '-webkit-mask-position': '-25% 0%',
    },
    '50%': {
      'mask-position': '125% 0%',
      '-webkit-mask-position': '125% 0%',
    },
    '100%': {
      'mask-position': '-25% 0%',
      '-webkit-mask-position': '-25% 0%',
    },
  },
}
export const animation = {
  'slide-in-down': 'slide-in-down 0.3s ease-in-out',
  'slide-out-up': 'slide-out-up 0.3s ease-in-out',
  'fade-in-left': 'fade-in-left 0.8s ease-out',
  'fade-in-right': 'fade-in-right 0.8s ease-out',
  'fade-in-up': 'fade-in-up 0.6s ease-out',
  'move-from-left': 'move-from-left 0.5s ease-out',
  'move-from-right': 'move-from-right 0.5s ease-out',
  opacity: 'opacity 0.5s ease-out',
  'dot-pattern-shimmer': 'dot-pattern-shimmer 8s ease-out infinite 0s',
}
