import usersStore from '../../store/users-store';
import './render-table.css';

let table;

const createTable = () => {
    const table = document.createElement('table');
    //const tableHeader = document.createElement('thead');

    table.innerHTML = `
        <thead>
            <tr>
                <th>#ID</th>
                <th>Balance</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Active</th>
                <th>Actions</th>
            </tr>
        </thead>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableBody);

    return table;
}

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const renderTable = ( element ) => {

    //Obtener data
    const users = usersStore.getUsers();

    if(!table) {
        table = createTable();
        element.append( table );
    }

    //TODO: Listeners


    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
        <tr>
            <td>${ user.id }</td>
            <td>${ user.balance }</td>
            <td>${ user.firstName }</td>
            <td>${ user.lastName }</td>
            <td>${ user.isActive }</td>
            <td>
                <a href="#/" data-id="${ user.id }"> Select</a> |
                <a href="#/" data-id="${ user.id }"> Delete</a>
            </td>
        </tr>
    `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}