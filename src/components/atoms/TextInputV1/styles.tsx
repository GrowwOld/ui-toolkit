import { styled } from '@stitches/react';

export const Container = styled('div', {
  borderBottom: '2px solid var(--subText70)',
  // width: 'fit-content',
  position: 'relative',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)'
      },
      unstyled: {
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
    // borderBottom: '2px solid var(--primaryClr)'
  },
  '&:after': {
    content: '',
    display: 'block',
    margin: 'auto',
    // height: '2px',
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
  // borderBottom: '2px solid var(--subText70)',
  // var(--border)
  flexGrow: 1,
  outline: 0,
  padding: 0,
  // paddingBottom: '5px',
  color: 'var(--text)',
  background: 'var(--primaryBg)',
  caretColor: 'var(--primaryClr)',
  variants: {
    variant: {
      default: {
      },
      exclusive: {
        background: 'var(--quaternaryBg)',
        padding: '12px 12px 12px 12px',
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
    // error: {
    //   true: {
    //     borderBottom: '2px solid var(--growwRed)'
    //   }
    // }
  },
  '&:focus': {
    outline: 0,
    border: 'none'
    // borderBottom: '2px solid var(--primaryClr)'
  },
  '&::placeholder': {
    // opacity: 0.2,
    color: 'var(--iconMedium)'
  },
  '&:-webkit-autofill': {
    boxShadow: '0 0 0 30px var(--primaryBg) inset !important',
    backgroundColor: 'var(--primaryBg) !important'
  }
});


export const Label = styled('div', {
  color: 'var(--subText)',
  marginBottom: '8px'
});

export const ErrorLabel = styled('div', {
  color: 'var(--growwRed)',
  marginTop: '8px'
});

export const WrapperContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
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
