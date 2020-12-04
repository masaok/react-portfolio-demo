import logo from './logo.svg'
import './App.css'

import clsx from 'clsx'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import theme from './themes/default'

const useStyles = makeStyles(
  theme => ({
    root: {
      width: '100vw',
      height: '100vh',
      padding: 0,
      margin: 0,
      backgroundColor: theme.palette.common.white, // switch to black for debugging
    },

    grid: {
      display: 'grid',
      height: '100vh',
      overflowY: 'scroll',
      gridTemplate: `
      "header header header" auto
      "left content right" auto
      "footer footer footer" auto
      / 1fr auto 1fr
      `,
    },

    // Grid Items
    gridItem: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.common.white,
      padding: theme.spacing(1),
    },

    headerItem: {
      gridArea: 'header',
    },

    leftItem: {
      gridArea: 'left',
    },

    contentItem: {
      gridArea: 'content',
    },

    rightItem: {
      gridArea: 'right',
    },

    footerItem: {
      gridArea: 'footer',
    },
  }),
  { name: 'App' }
)

const App = props => {
  const classes = useStyles(props)

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.grid}>
          <div className={clsx(classes.gridItem, classes.headerItem)}>HEADER</div>
          <div className={clsx(classes.gridItem, classes.leftItem)}>LEFT</div>
          <div className={clsx(classes.gridItem, classes.contentItem)}>CONTENT</div>
          <div className={clsx(classes.gridItem, classes.rightItem)}>RIGHT</div>
          <div className={clsx(classes.gridItem, classes.footerItem)}>FOOTER</div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
