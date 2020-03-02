const inputType = {
    FIRSTNAME: 'firstName',
    LASTNAME: 'lastName',
    EMAIL: 'email',
    PASSWORD: 'password',
    NUMBER: 'number',
};



exports.errorTxt = {
    // 400
    emptyAuthInfo: {
        front: `Le serveur n'a pas reçu vos informations`,
        log: `no password and email in AuthController checkReqBody`,
        inputError: {[inputType.EMAIL]: `Email requis`, [inputType.PASSWORD]: `Mot de passe requis`},
    },
    emptyAuthMail: {
        front: `Le serveur n'a pas reçu vos informations`,
        log: `no password and email in AuthController checkReqBody`,
        inputError: {[inputType.EMAIL]: `Email requis`},
    },
    emptyAuthPsw: {
        front: `Le serveur n'a pas reçu vos informations`,
        log: `no password and email in AuthController checkReqBody`,
        inputError: {[inputType.PASSWORD]: `Mot de passe requis`},
    },
    //401
    noToken: {
        front: `Nous n'onvons pas reçu votre jeton...`,
        log: ``,
    },
    wrongToken: {
        front: `Votre jeton est mauvais`,
        log: ``,
    },
    // 403
    wrongPsw: {
        front: `Le mot de passe est mauvais...`,
        log: `wrong password in authController authenticate`,
        inputError: {[inputType.PASSWORD]: `Le mot de passe est mauvais...`},

    },
    // 404
    accountCreation: {
        front: `Votre compte n'a pas pu être créé`,
        log: ``,
    },
    authUserNotFount: {
        front: `l'utilisateur n'a pas été trouvé`,
        log: `User not found in authController authenticate`,
        inputError: {[inputType.EMAIL]: `Cet utilisateur n'existe pas`},
    },
    userNotFount:  {
        front: `l'utilisateur n'a pas été trouvé`,
        log: `User not found in authController authenticate`,
    },
    userListNotFount:  {
        front: `La liste des utilisateur n'a pas été chargée`,
        log: ``,
    },
    userStatusNotChange:  {
        front: `Le status de l'utilisateur n'a pas été changé`,
        log: ``,
    },
    userDelete:  {
        front: `L'utilisateur n'a pas pu être supprimé`,
        log: ``,
    },
    userDoesNotExist:  {
        front: `l'utilisateur n'existe pas`,
        log: `user not found in userController checkId`,
        inputError: {[inputType.EMAIL]: `l'utilisateur n'existe pas`},
    },
    invalidEmail: {
        front: `Le format du mot de passe est mauvais`,
        log: `the email is not valid in AuthController checkReqBody`,
        inputError: {[inputType.PASSWORD]: `Le format de l'email est mauvais`},
    },
    weakPsw: {
        front: `Le mot de passe est trop faible`,
        log: `Invalid email in authController regitrer`,
        inputError: {[inputType.PASSWORD]: `Le mot de passe est trop faible`},
    },
    serviceOT: {
        front: `le Service fournissant les réponses est HS`,
        log: ``
    },
    noQuestion: {
        front: `Nous n'avons pas trouvé de question...`,
        log: ``
    },
    noAnswer: {
        front: `la bonne réponse n'a pas pu être obtenue`,
        log: `Countriy doesnot exist in req in gameController checkPopAnswer`
    },
    isNotANumber: {
        front: `La réponse n'est pas un nombre`,
        log: ``,
        inputError: {[inputType.NUMBER]: `La réponse n'est pas un nombre`},
    },
    // 500
    hash: {
        front: `le mot de passe n'a pas pu être crypté`,
        log: ``,
    },
    connection: {
        front: `Impossible de se connecter au serveur...`,
        log: ``,
    },
}
