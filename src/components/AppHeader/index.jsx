import React, {useState} from 'react'

import { TopAppBar, TopAppBarFixedAdjust, TopAppBarRow, TopAppBarSection, TopAppBarActionItem, TopAppBarTitle, TopAppBarNavigationIcon  } from '@rmwc/top-app-bar';
import { MenuSurfaceAnchor, Menu, MenuItem } from '@rmwc/menu';
import  {Button} from '@rmwc/button'

import { IconButton } from '@rmwc/icon-button';
import '@material/icon-button/dist/mdc.icon-button.css';




export default function AppHeader ({title, sortBy, onSortChange}) {
    const [open, setOpen] = useState(false);

return (
        <>
            <TopAppBar style={{position: "relative"}}>
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarTitle><h2> {title}</h2></TopAppBarTitle>
                    </TopAppBarSection>
                    
                    <TopAppBarSection alignEnd>
                    {/* <TopAppBarActionItem icon="favorite"
                            onClick={evt => setOpen(!open)} /> */}
                             <IconButton 
                        icon="sort" 
                        label="sort!"
                        onClick={evt => setOpen(!open)}
                        />
                    </TopAppBarSection>
                    {/* <MenuSurfaceAnchor >
                        <Menu
                        open={open}
                        onSelect={evt => console.log(evt.detail.index)}
                        onClose={evt => setOpen(false)} 
                        >
                            <MenuItem>Cookies</MenuItem>
                            <MenuItem>Pizza</MenuItem>
                            <MenuItem>Icecream</MenuItem>
                        </Menu>
                    </MenuSurfaceAnchor>  */}
                </TopAppBarRow>
            </TopAppBar>
           {open &&  <div style={{padding: "30px"}}  >
               <span 
                style={{padding: '8px 30px', background: 'white', borderRadius: '22px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => onSortChange('title')}
                >По названию</span>
                <span 
                style={{padding: '8px 30px', background: 'white', borderRadius: '22px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => onSortChange('date')}
                >По дате</span>
                <span 
                style={{padding: '8px 30px', background: 'white', borderRadius: '22px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => onSortChange('completed')}
                >По выполненым</span>
                <span 
                style={{padding: '8px 30px', background: 'white', borderRadius: '22px', cursor: 'pointer', marginRight: '20px' }}
                onClick={() => onSortChange('important')}
                >По важности</span>
            </div> }

            {/* <TopAppBarFixedAdjust /> */}
        </>
    )
}