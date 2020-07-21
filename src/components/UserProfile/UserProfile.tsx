import * as React from "react"
import { useState } from "react"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import { Grid, GridSpacing, Paper } from "@material-ui/core"

import { lightTheme, darkTheme } from "../DarkTheme/DarkTheme"
import UserLoader from "../UserLoader/UserLoader"
import { UserProfileInfo } from "./UserProfileInfo/UserProfileInfo"
import { useSelector } from "react-redux"
import Lottie from "react-lottie"
import notFoundUser from "../NotFoundUser/NotFoundUser.json"

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(5),
    },
    paper: {
      height: 350,
      width: 250,
      overflow: "hidden",
      position: "relative",
      background: lightTheme.card,
      boxShadow: lightTheme.boxShadow,
    },
    darkPaper: {
      height: 350,
      width: 250,
      overflow: "hidden",
      position: "relative",
      background: darkTheme.surface,
      boxShadow: darkTheme.boxShadow,
    },
  })
})

interface Props {
  isLoading: boolean
  userFetchedData: any
}

export const UserProfile: React.FC<Props> = ({
  userFetchedData,
  isLoading,
}) => {
  const [spacing] = useState<GridSpacing>(2)
  const classes = useStyles()
  /** getting isDark property to change the profile color */
  const isDark = useSelector(state => state.isDark)

  /** Not Found User Animation */
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFoundUser,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }

  let showUserProfile
  if (isLoading) showUserProfile = <UserLoader />

  if (!isLoading && userFetchedData) {
    showUserProfile = <UserProfileInfo userInfo={userFetchedData} />
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={spacing}>
        {/** if User Data has been found */}
        {userFetchedData && (
          <Grid item>
            <Paper
              elevation={2}
              className={isDark ? classes.darkPaper : classes.paper}
            >
              {showUserProfile}
            </Paper>
          </Grid>
        )}
        {/* User Data Not Found */}
        {!userFetchedData && (
          <Lottie options={defaultOptions} height={350} width={400} />
        )}
      </Grid>
    </Grid>
  )
}