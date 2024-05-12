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
}
export const animation = {
  'slide-in-down': 'slide-in-down 0.3s ease-in-out',
  'slide-out-up': 'slide-out-up 0.3s ease-in-out',
}
