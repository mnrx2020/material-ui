import React from 'react'
import { Accordion,AccordionSummary,AccordionDetails, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const MuiAccordian = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const handleChange = (isExpanded: boolean, panel:string) => {
        setExpanded(isExpanded?panel:false)
    }

  return (
    <div>
        <Accordion expanded={expanded==="panel1"} onChange={(event,isExpanded)=>handleChange(isExpanded,"panel1")}>
            <AccordionSummary 
            id='panel1-header' 
            aria-controls='panel1-content' 
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, 
                    sit iste quidem, distinctio temporibus, ullam facere repellat nemo necessitatibus 
                    eos culpa adipisci dolor labore laudantium dolores praesentium optio dolorem atque!</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded==="panel2"} onChange={(event,isExpanded)=>handleChange(isExpanded,"panel2")}>
            <AccordionSummary 
            id='panel2-header' 
            aria-controls='panel2-content' 
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, 
                    sit iste quidem, distinctio temporibus, ullam facere repellat nemo necessitatibus 
                    eos culpa adipisci dolor labore laudantium dolores praesentium optio dolorem atque!</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded==="panel3"} onChange={(event,isExpanded)=>handleChange(isExpanded,"panel3")}>
            <AccordionSummary 
            id='panel3-header' 
            aria-controls='panel3-content' 
            expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, 
                    sit iste quidem, distinctio temporibus, ullam facere repellat nemo necessitatibus 
                    eos culpa adipisci dolor labore laudantium dolores praesentium optio dolorem atque!</Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordian