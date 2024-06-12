import React from 'react'
import { Snackbar,Button,Alert,AlertProps } from "@mui/material"
import { useState,forwardRef } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackbar = () => {
    const [open,setOpen]=useState(false)
    const handleClose = (event?:React.SyntheticEvent | Event, reason?:string) => {
        if(reason==="clickaway"){
            return
        }
        setOpen(false)
    }

  return (
    <>
    <Button onClick={()=>setOpen(true)}>Submit</Button>
    {/* 
    <Snackbar 
    message="Form submitted successfully!" 
    autoHideDuration={4000} 
    open={open} onClickCapture={handleClose} anchorOrigin={{
        vertical:"bottom",
        horizontal:"center"
    }}/>
     */}
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
            Form submitted successfully!
        </SnackbarAlert>
     </Snackbar>
    </>
  )
}

export default MuiSnackbar