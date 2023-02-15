import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createTheme, ThemeProvider} from "@mui/material";
import {accordionDetails} from '../../../../data/data'
import styles from './accordion.module.scss'

const theme = createTheme({
    palette: {
        mode: 'light', primary: {
            main: '#3f51b5',
        }, secondary: {
            main: '#f50057',
        },
    },
})


export default function AccordionFooterMenu() {
    return (<ThemeProvider theme={theme}>
            <div className={styles.accordion}>
                <Accordion defaultExpanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Букеты</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        {accordionDetails.map(el => {
                            return <div key={el.id}>{el.name}</div>
                        })}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Розы</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {accordionDetails.map(el => {
                            return <div key={el.id}>{el.name}</div>
                        })}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Цветы в коробке</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {accordionDetails.map(el => {
                            return <div key={el.id}>{el.name}</div>
                        })}
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography>Композиции</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {accordionDetails.map(el => {
                            return <button key={el.id}>{el.name}</button>
                        })}
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>)
}