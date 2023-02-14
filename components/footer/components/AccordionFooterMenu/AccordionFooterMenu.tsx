import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Info from "../Info";
import Support from "../Support";
import Personal from "../Personal";
import Additionally from "../Additionally";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
})

export default function AccordionFooterMenu() {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>ІНФОРМАЦІЯ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Info/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>СЛУЖБА ПІДТРИМКИ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Support/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>ОСОБИСТИЙ КАБІНЕТ</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Personal/>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography> ДОДАТКОВО</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Additionally/>
                    </AccordionDetails>
                </Accordion>
            </div>
        </ThemeProvider>

    );
}