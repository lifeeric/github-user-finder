/** For user Fetched data */
type UserInfo = {
  name: string
  avatarUrl: string
  bio: string
  followers: {
    totalCount: number
  }
  following: {
    totalCount: number
  }
  starredRepositories: {
    totalCount: number
  }
}

/** For root state of the user data */
interface RootState {
  searchValue: string
  userFound: any
  isLoading: boolean
  defaultUser: any
}

/** for Axios */
declare module "axios"
