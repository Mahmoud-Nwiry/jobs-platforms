import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../../redux/jobs'
import Navbar from '../../components/Navbar'
import SearchBox from '../../components/SearchBox'
import CustomTabs from '../../components/Tabs'
import Jobs from './Jobs'
import ProfileSide from './ProfileSide'
import CustomDrawer from '../../components/Drawer'
import { Navigate } from 'react-router-dom'

const Home = () => {

  const { jobs, isLoading, error } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.user);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => { 
      setIsDrawerOpen(open);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch])
  
  return (
    <Box>
      {Object.keys(user)?.length === 0 ? <Navigate to='/login' /> : ''}
        <Navbar />
        <Container
          sx={{
            my : 30,
            display : 'grid',
            gridTemplateColumns : '1fr 300px',
            gap : '30px',
            alignItems : 'start'
          }}
        >
          <Box>
            <SearchBox />
            <Box
              sx={{
                border : '1px solid',
                borderColor : 'secondary.main',
                borderRadius : '10px',
                py : '5px',
                mt : '20px'
              }}
            >
              <Typography variant='h5' fontWeight={500} m=" 20px 20px">Jops you might like</Typography>
              <CustomTabs 
                bestMatches={<Jobs jobs={jobs} />}
                mostRecent={<Jobs jobs={jobs} />}
                saved={<Jobs jobs={jobs} />}
              />
            </Box>
          </Box>
          <ProfileSide name={user?.name || "undefined name"} work={user?.profile?.name || 'No work'} />

          <CustomDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer} />
        </Container>
    </Box>
  )
}

export default Home