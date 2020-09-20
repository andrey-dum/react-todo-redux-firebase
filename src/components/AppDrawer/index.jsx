import React, {  useContext } from 'react';
import { NavLink } from 'react-router-dom';


import DataContext from '../../context/store'
import {actions} from '../../store'


import { 
    Drawer, 
    DrawerHeader, 
    DrawerTitle,  
    DrawerContent } from '@rmwc/drawer';
import { 
    List, 
    ListItem, 
    ListItemGraphic,
    ListItemText,
    ListDivider
 } from '@rmwc/list';

import { Icon } from '@rmwc/icon';

import '@rmwc/drawer/styles';
import '@rmwc/list/styles';
//import '@rmwc/icon/styles';

function AppDrawer ({lists}) {
    const {state} = useContext(DataContext);

    function handleExitButtonClick () {
        actions.signOutUser()
    }
  
    return (
        <Drawer> 
            <DrawerHeader>
                <DrawerTitle className="app_title">
                    <Icon icon={{ icon: 'psychology', size: 'xlarge' }} />
                    <NavLink to="/" className="app-logo"><h1>React Todo</h1></NavLink>
                   
                    </DrawerTitle>
                   
                    <div>{ state.user ? <div>{state.user.email} <button onClick={handleExitButtonClick}>Log Out</button></div> : '' }</div>
            </DrawerHeader>
            <DrawerContent>
                <List>
                    {[
                        {title: 'Задачи', icon: 'home', to: '/'},
                        {title: 'Важное', icon: 'star', to: '/important'},
                        {title: 'Запланированные', icon: 'event', to: '/planned'},
                    ].map((item, index)=> (
                        <ListItem 
                            key={item.icon}
                            
                        >
                         <NavLink to={item.to} className="drawer-links">
                            <ListItemGraphic icon={item.icon} />
                            <ListItemText>
                               {item.title}
                            </ListItemText>
                            </NavLink>
                        </ListItem>
                        )
                    )}
                    
                </List> 
                <ListDivider />
                <List>
                    {lists.map((item)=> (
                        <ListItem 
                            key={item.id}
                        >
                          <NavLink to={item.id} className="drawer-links">
                            <ListItemGraphic icon="list" />
                            <ListItemText>{item.title}</ListItemText>
                            </NavLink>
                        </ListItem>
                        )
                    )}
                    
                </List> 
               
            </DrawerContent>
        </Drawer>
    )
}

export default AppDrawer