import './Kpi.css'
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));

export default function Kpi1() {
    return (
<div className="kpi">
        <HtmlTooltip
                title={
                <React.Fragment>
                <Typography color="inherit">KPI tooltip</Typography>
                {"This KPI means X "}
                </React.Fragment>
                }>

                    <div className="kpiItem">
                        <span className="kpiTitle">Total DART P&L</span>
                        <div className="kpiMoneyContainer">
                            <span className="kpiMoney">$234,567</span>
                        </div>
                    </div>              
      </HtmlTooltip>

            
</div>
    )
}
