const styles = {
  bannerText: {
    textTransform: 'uppercase',
    mt: 27,
    fontWeight: '500',
    position: 'relative',
  },
  helloText: {
    fontSize: '2.3rem',
    '&::after': {
      content: '""',
      width: '400px',
      height: '2px',
      position: 'absolute',
      top: '15.5%',
      left: '25%',
      background: '#000',
    },
  },
} as const;

export default styles;
