import { realpathSync } from "fs";

const VALIDATED = 0;
const EMPTY_FIELD = 1;

const EMAIL_NOT_VALIDATED = 2;

const MINUMUM_CHARACTER = 2
const PASSWORD_NOT_VALIDATED = 3;

const NAME_NOT_VALIDATED = 3;

const PHONE_NOT_VALIDATED = 3;

const BIRTHDATE_NOT_VALIDATED = 2;

/**
 * Validates a email
 * 
 * @param {string} email
 * @return {number}
 * - 0 Validated Email
 * - 1 Empty
 * - 2 Email not validated
 */

export function validationEmail(email: string) {

    if (email.length === 0) {
        return EMPTY_FIELD;
    }

    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    if (emailRegex.test(String(email).toLowerCase())) {
        return VALIDATED;
    }
    else {
        return EMAIL_NOT_VALIDATED;
    }
}

/**
 * Validates a password
 * 
 * @param {string} password
 * @return {number}
 * - 0 Validated Password
 * - 1 Empty
 * - 2 Minimum 7 characters
 * - 3 One digit e one number 
 */

export function validationPassword(password: string) {

    if (password.length === 0) {
        return EMPTY_FIELD;
    }

    const passwordRegex = /^.*(?=.{7,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;

    if (password.length < 7) {
        return MINUMUM_CHARACTER;
    }
    else if (!passwordRegex.test(String(password).toLowerCase())) {
        return PASSWORD_NOT_VALIDATED;
    }
    else {
        return VALIDATED;
    }

}

export function validationName (name: string) {
    
    if (name.length === 0) {
        return EMPTY_FIELD;
    }
    
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (nameRegex.test(String(name).toLowerCase())){
        return VALIDATED;
    }
    else {
        return NAME_NOT_VALIDATED;
    }
}

export function validationPhone (phone: string) {
    
    if (phone.length === 0) {
        return EMPTY_FIELD
    }

    const phoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;

    if (phoneRegex.test(String(phone).toLowerCase())) {
        return VALIDATED;
    }
    else {
        return PHONE_NOT_VALIDATED;
    }
}

export function validationBirthDate (birthDate: string) {

    if (birthDate.length === 0) {
        return EMPTY_FIELD;
    }

    const birthDateRegex = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/;

    if (birthDateRegex.test(String(birthDate).toLowerCase())) {
        return VALIDATED;
    }
    else {
        return BIRTHDATE_NOT_VALIDATED;
    }
}

// TODO
// export function validationCPF (cpf: number) {

// }

/**
 * User form error alert
 * 
 * @param {number} emailError 
 * @param {number} passwordError 
 */

export function errorAlert(emailError: number, passwordError: number){

    let emailAlert: string = "";
    let passwordAlert: string = "";
    
    // Email Messages
    if (emailError === 0) {
        emailAlert = "Email Validado!";
    }
    else {
        if (emailError === 1) {
            emailAlert = "Preencha o email";
        }
        else if (emailError === 2) {
            emailAlert = "Email invalido";
        }

        alert(emailAlert);

    }

    // Password Messages
    if (passwordError === 0) {
        passwordAlert = "Senha válida!";
    }
    else {
        if (passwordError === 1) {
            passwordAlert = "Preencha a senha";
        }
        else if (passwordError === 2) {
            passwordAlert = "Minimo 7 caracteres";
        }
        else if (passwordError === 3) {
            passwordAlert = "Necessário pelo menos 1 número e 1 letra";
        }

        alert(passwordAlert);
    }
}