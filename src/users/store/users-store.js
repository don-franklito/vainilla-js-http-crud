/* Store: Carga la data de la aplicación */

import { loadUsersByPage } from "../uses-cases/load-users-by-page";

const state = {
    users: [],
    currentPage: 0
}

const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if ( users.length === 0 ) return;

    state.currentPage += 1;
    state.users = users;
}

const previousNextPage = async() => {
    if(state.currentPage === 1) return;

    const users = await loadUsersByPage( state.currentPage - 1 );
    if ( users.length === 0 ) return;

    state.currentPage -= 1;
    state.users = users;
}

const onUserChange = () => {
    throw new Error('Not implemented');
}

const reloadPage = async() => {
    throw new Error('Not implemented');
}

export default {
    loadNextPage,
    onUserChange,
    previousNextPage,
    reloadPage,

    /**
     * 
     * @returns { User[] }
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns { Number }
     */
    getCurrentPage: () => state.currentPage,
}