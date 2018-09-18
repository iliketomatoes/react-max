const styles = {
  root: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'flex-end',
    margin: '0 auto',
    maxWidth: '1680px',
    padding: '80px 0 40px',
    width: '100%'
  },
  paneToggle: {
    background: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '2px',
    display: 'inline-block',
    marginLeft: '2px',
    padding: '4px'
  },
  paneToggleOption: {
    height: '24px',
    marginRight: '2px',
    width: '24px'
  },
  paneContainer: {
    display: 'grid',
    flex: '1 0 auto',
    margin: '0 auto',
    width: '100%'
  },
  onePane: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    maxWidth: '820px'
  },
  twoPanes: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '1280px'
  },
  threePanes: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: '1680px'
  }
};

export default styles;
