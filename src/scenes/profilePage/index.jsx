import { useEffect, useState } from "react"
import { Box, Typography, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Navbar from "scenes/navbar"
import FriendListWidget from "scenes/widgets/FriendListWidget"
import PostsWidget from "scenes/widgets/PostsWidget"
import UserWidget from "scenes/widgets/UserWidget"

const base_url = "https://postyourmind-backend.cyclic.app"
// "http://localhost:3001/auth/login"

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const { userId } = useParams()
  const token = useSelector((state) => state.token)
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")

  const getUser = async () => {
    const response = await fetch(`${base_url}/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null; //prevent bug of returning no user


  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <Typography variant="h2">{user.firstName}'s posts</Typography>
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage