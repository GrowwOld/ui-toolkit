import { styled } from '@stitches/react';

export const Container = styled('div', {
  borderBottom: '2px solid var(--subText70)',
  width: '100%',
  position: 'relative',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)'
      },
      unstyled: {
        borderBottom: 'none',
        '&:after': {
          display: 'none',
          borderBottom: 'none'
        }
      }
    },
    disabled: {
      true: {
        borderBottom: 'none',
        '&:focus-within::after': {
          background: 'var(--growwRed)',
          height: '2px'
        }
      }
    },
    error: {
      true: {
        '&:focus-within::after': {
          background: 'var(--growwRed)',
          height: '2px'
        }
      }
    }
  },
  '&:focus-within': {
    outline: 0,
    border: 'none'
  },
  '&:after': {
    content: '',
    display: 'block',
    margin: 'auto',
    width: '0px',
    background: 'transparent',
    transition: '0.2s ease all'
  },
  '&:focus-within::after': {
    width: '100%',
    height: '2px',
    background: 'var(--primaryClr)'
  }
});

export const PrimaryInput = styled('input', {
  border: 'none',
  flexGrow: 1,
  outline: 0,
  padding: 0,
  color: 'var(--text)',
  background: 'var(--primaryBg)',
  caretColor: 'var(--primaryClr)',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)',
        borderRadius: '4px 4px 0px 0px'
      },
      unstyled: {

      }
    },
    disabled: {
      true: {
        borderBottom: 'none',
        pointerEvents: 'none',
        '&:focus-within': {
          borderBottom: 'none'
        }
      }
    }
  },
  '&:focus': {
    outline: 0,
    border: 'none'
  },
  '&::placeholder': {
    color: 'var(--iconMedium)',
    WebkitTextFillColor: 'var(--iconMedium)'
  },
  '&:-webkit-autofill': {
    boxShadow: '0 0 0 30px var(--primaryBg) inset !important',
    backgroundColor: 'var(--primaryBg) !important'
  }
});


export const Label = styled('div', {
  color: 'var(--subText)',
  marginBottom: '8px',
  textAlign: 'left'
});

export const ErrorLabel = styled('div', {
  color: 'var(--growwRed)',
  minHeight: '24px',
  marginTop: '4px',
  marginBottom: '4px',
  textAlign: 'left',
  variants: {
    error: {
      true: {
        visibility: 'visible'
      },
      false: {
        visibility: 'hidden'
      }
    }
  }
});

export const WrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        padding: '12px 12px 12px 12px'
      },
      unstyled: {

      }
    }
  }
});

export const TrailingVisContainer = styled('span', {
  height: '100%',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)'
      },
      unstyled: {

      }
    }
  }
});

export const LeadingVisContainer = styled('span', {
  height: '100%',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)'
      },
      unstyled: {
      }
    }
  }
});
