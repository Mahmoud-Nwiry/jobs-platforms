import { Box } from '@mui/material'
import JobCard from '../../components/JopCard'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addJob, setOpen } from '../../redux/drawer'

const Jobs = ({jobs}) => {

  const dispatch = useDispatch();

  const openDrawer = (job) => {
    dispatch(setOpen(true));
    dispatch(addJob(job))
  }

  return (
    <Box>
        {
            jobs.map(job => <JobCard 
                onClick={() => openDrawer(job)}
                title={job.title}
                workWay={job.work_way}
                level={job.freelancer_level}
                price={job.price}
                posted={job.posted}
                description={job.description}
                skills={job.skills}
                location={job.location}
            />)
        }
    </Box>
  )
}

export default Jobs