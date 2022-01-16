import './pageStyles.css'
import TopGenpages from '../TopGenpages';
import BasicTabs from '../tabs';

export default function PortfolioSummary(){
    return (
        <div>
          <TopGenpages />
        <span className='pagetitle'>
        This is my Portfolio Summary page
        <br></br>
         </span>
        <div className='wrapper'>
            <div className='header1'>
              <BasicTabs />

                    </div>
        </div>
        </div>
      );
    }
 