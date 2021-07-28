export const validEmail = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/gi;

// http://www.rubular.com/r/ga546JrYpQ
export const validPhoneNumber = /^\+?[(]?[*0-9]+[)]?.?[0-9]{3,4}?.?[0-9]{3,4}$/;
export const validUrl = /(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
export const forbiddenCharacters = /[^\w.\-+]/;

export const validUsername = /^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){5,18}[a-zA-Z0-9]$/;

export const eMessage = {
      INVALID_USERNAME:
        'Your account username may only contain A-Z, 0-9, period, underscore, and hyphen characters!',
      INVALID_EMAIL: 'Should be a valid email',
      PHONE_NUMBER_NOT_VALID: 'Should be a phone number',
      INVALID_PASSWORD: 'Passwords do not match!',
      EMAIL_DOESNT_EXIST: 'We cant find the email you provided!',
      CONTACT_SUPPORT: "Something unexpected happened, please contact support!",
      USERNAME_TAKEN: "This username is already taken!"
};
