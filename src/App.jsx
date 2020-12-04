import './App.css'

import clsx from 'clsx'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import FaceIcon from '@material-ui/icons/Face'

import MediaCard from './cards/MediaCard'

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
      "header header header" 1fr
      "left content right" 5fr
      "footer footer footer" 1fr
      / 1fr 5fr 1fr
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
      backgroundColor: 'lightgreen',
    },

    leftItem: {
      gridArea: 'left',
      backgroundColor: 'pink',
    },

    contentItem: {
      gridArea: 'content',
      backgroundColor: 'lightblue',
    },

    rightItem: {
      gridArea: 'right',
      backgroundColor: 'lavender',
    },

    footerItem: {
      gridArea: 'footer',
      backgroundColor: 'orange',
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
          <div className={clsx(classes.gridItem, classes.headerItem)}>
            <FaceIcon />
            HEADER
          </div>
          <div className={clsx(classes.gridItem, classes.leftItem)}>LEFT</div>
          <div className={clsx(classes.gridItem, classes.contentItem)}>
            {/* CONTENT */}
            <MediaCard />
          </div>
          <div className={clsx(classes.gridItem, classes.rightItem)}>RIGHT</div>
          <div className={clsx(classes.gridItem, classes.footerItem)}>FOOTER</div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
