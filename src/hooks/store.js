import { useContext } from 'react';

import StoreContext from '../context/store';

export default function useStore() {
    const { state, actions } = useContext(StoreContext);

    return {
        state,
        actions
    };
}