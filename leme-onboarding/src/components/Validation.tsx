

export function validationEmail(email: string) {
    /**
     * 0 - Validated Email
     * 1 - Empty field
     * 2 Email not validated
    */

    if (email.length === 0) {
        return 1;
    }

    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    if (emailRegex.test(String(email).toLowerCase())) {
        return 0;
    }
    else {
        return 2;
    }
}

export function validationPassword(password: string) {
    /*
        * 0 Validated Password
        * 1 Empty
        * 2 Minimum 7 characters
        * 3 One digit e one number 
        */

    if (password.length === 0) {
        return 1;
    }

    const passwordRegex = /^.*(?=.{7,20})(?=.*\d)(?=.*[a-zA-Z]).*$/;

    if (password.length < 7) {
        return 2;
    }
    else if (!passwordRegex.test(String(password).toLowerCase())) {
        return 3;
    }
    else {
        return 0
    }

}

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