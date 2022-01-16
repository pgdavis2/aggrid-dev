import './pageStyles.css'
import TopGenpages from '../components/TopGenpages';
import GenTabs from '../components/GenTabs';

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
              <GenTabs />

                    </div>
        </div>
        </div>
      );
    }
 