import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { 
    Drawer, 
    DrawerHeader, 
    DrawerTitle,  
    DrawerSubtitle, 
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
  

    return (
        <Drawer> 
            <DrawerHeader>
                <DrawerTitle className="app_title">
                    <Icon icon={{ icon: 'psychology', size: 'xlarge' }} />
                    <h1>ReactTodo</h1>
                    </DrawerTitle>
                {/* <DrawerSubtitle>Subtitle</DrawerSubtitle> */}
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