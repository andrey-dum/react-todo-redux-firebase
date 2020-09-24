import React, {  useState } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';
//import DataContext from '../../context/store'
//import {actions} from '../../store'
import useStore from '../../hooks/store'

import  {TextField} from '@rmwc/textfield'

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
    ListDivider,
    ListItemMeta
 } from '@rmwc/list';
 import { IconButton } from '@rmwc/icon-button';
import { Icon } from '@rmwc/icon';
import  {Button} from '@rmwc/button'
import '@rmwc/drawer/styles';
import '@rmwc/list/styles';
//import '@rmwc/icon/styles';

function AppDrawer ({lists}) {
    //const {state} = useContext(DataContext);
    const {state, actions} = useStore();
    const [listTitle, setListTitle] = useState('');

    function handleExitButtonClick () {
        actions.signOutUser()
    }

    function handleSubmit (event) {
        event.preventDefault();

        actions.createList({
            title: listTitle,
            userId: state.user.uid
        }).then((res) => {
            setListTitle('')
        });
    }

    function handleDeleteList (listId) {
        actions.deleteList(listId)
    
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
                            className="side__list-item"
                        >
                          <NavLink to={item.id} className="drawer-links">
                            <ListItemGraphic icon="list" />
                            <ListItemText>{item.title}</ListItemText>
                            </NavLink>
                            <ListItemMeta >
                            <IconButton 
                                icon='delete'
                                onClick={() => handleDeleteList(item.id)}
                                />
                           </ListItemMeta >
                           
                        </ListItem>
                        )
                    )}
                
                    
                </List> 
               

                <form onSubmit={handleSubmit} className="form__list">
                <TextField 
                    value={listTitle}
                    onChange={(event) => setListTitle(event.target.value)}
                    fullwidth
                    required
                    label="Имя списка..." />
              <Button  label="Добавить"  />

                </form>
            </DrawerContent>
        </Drawer>
    )
}

export default AppDrawer