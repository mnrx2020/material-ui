import React from 'react'
import { Box, Card, CardContent, Typography, CardActions,Button,CardMedia } from "@mui/material"

const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia component="img" height="140px" image='https://source.unsplash.com/random' alt='unsplash image'/>
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">React</Typography>
                <Typography variant='body2' color="text.secondary">
                React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library 
                for building user interfaces based on components.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn more</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard