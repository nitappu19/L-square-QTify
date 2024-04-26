import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Accordian.css'
export default function FAQs() {
  return (
    <div className='accordian'>
      <h1>FAQs</h1>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Is QTify free To Use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! it is 100a% free, and has 0 ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we dont provide the service to downaload any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}