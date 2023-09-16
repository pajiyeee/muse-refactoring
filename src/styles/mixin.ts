export const flexBox = (
  direction: string | undefined = 'row',
  wrap: string | undefined = 'nowrap',
  justify: string | undefined = 'center',
  items: string | undefined = 'center'
) => `
  display: flex;
  flex-flow: ${direction} ${wrap};
  justify-content: ${justify};
  align-items: ${items};
`

export const absolute = (
  top: string | undefined = '50%',
  left: string | undefined = '50%',
  right: string | undefined = '50%',
  translate: string | undefined = '-50%, -50%'
) => `position: absolute;
top: ${top};
left: ${left};
right: ${right};
transform: translate(${translate});`
