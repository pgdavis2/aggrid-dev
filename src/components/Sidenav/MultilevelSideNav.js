import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MultilevelSideNav.css';

const MultilevelSideNav = ({ data, sideNavState, sideNavHandler }) => {

    const [currentMenus, setCurrentMenus] = useState(data);
    const [previousStack, setPreviousStack] = useState([]);

    const renderMenuItems = data => {

        return data.map((item, index) =>
            (item?.children && item?.children.length) ? (
                
                <Link key={index}
                    onClick={e => {
                        previousStack.push(data);
                        setPreviousStack(previousStack);
                        setCurrentMenus(item.children)
                    }}
                    to={"#"}>{item.name} &gt; </Link>

            ) : <Link  key={index} to={item.url}>{item.name}</Link>
        )

    }

    return data && (
        
        <div style={{ width: (sideNavState) ? '160px' : '0' }} className="multilevelSideNav">
           <img src={require('./Logo.png').default} alt='pci' className='side-menu'></img>
            
            <Link to={"#"} className="closebtn" onClick={e => sideNavHandler(false)}>&times;</Link>
            {(previousStack.length) ?
                <Link style={{ color:'yellow'}} to={"#"} onClick={e => {
                    const prevState = previousStack.pop();
                    setPreviousStack(previousStack);
                    setCurrentMenus(prevState);

                }}>&lt; Back</Link>
                : null
            }
            {
                renderMenuItems(currentMenus)
            }

        </div>
    );
}

export default MultilevelSideNav;
