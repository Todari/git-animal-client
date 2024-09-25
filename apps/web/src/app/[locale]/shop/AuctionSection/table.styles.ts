import { css } from '_panda/css';

export const tableCss = css({
  width: '100%',
  marginBottom: 32,
});

export const theadCss = css({
  display: 'grid',
  gridTemplateColumns: '1fr 2.5fr 1fr 1fr 4.2fr 1.5fr',
  gap: 16,
  padding: '4px 32px',
  borderRadius: '12px',
  backgroundColor: 'white_50',
  alignItems: 'center',

  height: 46,
  textStyle: 'glyph18.bold',
  color: 'white_100',

  '& > span:nth-child(1)': {
    textAlign: 'center',
  },

  marginBottom: 4,
});

export const tbodyCss = css({
  display: 'flex',
  flexDir: 'column',
  gap: 4,
});