import { styled } from '@stitches/react';


export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  background: 'var(--primaryClr10)',
  width: 'fit-content',
  height: '30px',
  color: 'var(--primaryClr)',
  borderRadius: '2px',
  padding: '0px 5px',
  variants: {
    variant: {
      warning: {
        background: 'var(--growwYellow10)',
        color: 'var(--growwYellow)'
      },
      error: {
        background: 'var(--growwRed10)',
        color: 'var(--growwRed)'
      },
      disabled: {
        background: 'var(--constantSecondaryClr10)',
        color: 'var(--text)'
      },
      unstyled: {
        background: 'transparent',
        color: 'var(--text)',
        border: 'none'
      },
      default: {
        background: 'var(--primaryClr10)',
        color: 'var(--primaryClr)'
      }
    }
  }
}
);

export const Input = styled('input', {
  border: 'none',
  height: '30px',
  width: '82px',
  color: 'inherit',
  background: 'transparent',
  textAlign: 'right',
  flexGrow: 1,
  outline: 0,
  opacity: 1,
  caretColor: 'var(--primaryClr)',
  WebkitTextFillColor: 'var(--primaryClr)',
  padding: 0,
  variants: {
    variant: {
      warning: {
        caretColor: 'var(--growwYellow)',
        WebkitTextFillColor: 'var(--growwYellow)'
      },
      error: {
        caretColor: 'var(--growwRed)',
        WebkitTextFillColor: 'var(--growwRed)'
      },
      disabled: {
        pointerEvents: 'none',
        caretColor: 'var(--text)',
        WebkitTextFillColor: 'var(--text)'
      },
      unstyled: {
        caretColor: 'var(--text)',
        WebkitTextFillColor: 'var(--text)'
      },
      default: {
        caretColor: 'var(--primaryClr)',
        WebkitTextFillColor: 'var(--primaryClr)'
      }
    },
    showSteper: {
      true: {
        textAlign: 'center',
        width: '60px'
      }
    }
  },
  '&::placeholder': {
    color: 'var(--iconMedium)',
    WebkitTextFillColor: 'var(--iconMedium)'
  }
});
