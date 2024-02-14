import { User } from "../models/user";

/**
 * 
 * @param { Like<User> } localhostUser 
 * @returns { User }
 */
export const localhostUserToModel = (localhostUser) => {

    const { 
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender,
    } = localhostUser;

    return new User({
        id, 
        isActive, 
        balance, 
        avatar, 
        firstName: first_name, //Se cambia el valor de la variable a como se espera en el modelo
        lastName: last_name, 
        gender
    });
}