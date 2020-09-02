import React from 'react';

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
 } from '@rmwc/list';

import { Icon } from '@rmwc/icon';

import '@rmwc/drawer/styles';
import '@rmwc/list/styles';
//import '@rmwc/icon/styles';

function AppDrawer ({lists}) {
    return (
        <Drawer> 
            <DrawerHeader>
                <DrawerTitle>
                    <Icon icon={{ icon: 'psychology', size: 'large' }} />
                    <h1>ReactTodo</h1>
                    </DrawerTitle>
                {/* <DrawerSubtitle>Subtitle</DrawerSubtitle> */}
            </DrawerHeader>
            <DrawerContent>
                <List>
                    {[
                        {title: 'Задачи', icon: 'home'},
                        {title: 'Важное', icon: 'star'},
                        {title: 'Запланированные', icon: 'event'},
                    ].map((item, index)=> (
                        <ListItem key={index}>
                            <ListItemGraphic icon={item.icon} />
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                        )
                    )}
                    
                </List> 

                <List>
                    {lists.map((item)=> (
                        <ListItem key={item.id}>
                            <ListItemGraphic icon="list" />
                            <ListItemText>{item.title}</ListItemText>
                        </ListItem>
                        )
                    )}
                    
                </List> 
                       
               
            </DrawerContent>
        </Drawer>
    )
}

export default AppDrawer