export interface TranslationKeys {
  auth: {
    firstName: string;
    lastName: string;
    firstNamePlaceholder: string;
    lastNamePlaceholder: string;
    createAccount: string;
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    registerButton: string;
    alreadyHaveAccount: string;
    login: string;
    loginButton: string;
    noAccount: string;
    register: string;
    error: {
      shortPassword: string;
      nameRequired: string;
      emailInUse: string;
      invalidEmail: string;
      operationNotAllowed: string;
      weakPassword: string;
      generic: string;
      userNotFound: string;
      wrongPassword: string;
      invalidCredential?: string;
    };
  };
  header: {
    user: string;
    logout: string;
    login: string;
    register: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
    quotes: string;
    booking: string;
    changeTheme: string;
    changeLanguage: string;
    toggleMenu: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      quoteButton: string;
      contactButton: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      qualityTitle: string;
      description: string;
      contactText: string;
      formButton: string;
      businessCardTitle: string;
    };
    reviews: {
      title: string;
      subtitle: string;
      emptyState: string;
      formTitle: string;
      nameLabel: string;
      namePlaceholder: string;
      ratingLabel: string;
      commentLabel: string;
      commentPlaceholder: string;
      submitButton: string;
      loginRequired: string;
      loginButton: string;
      loginMessage: string;
    };
  
  };
}

export type Translations = {
  es: TranslationKeys;
  en: TranslationKeys;
};