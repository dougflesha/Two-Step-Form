import * as React from 'react';
import { getter } from '@progress/kendo-react-common';

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const phoneRegex = new RegExp(/^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/); 
const stRegex = new RegExp(/^[0-9\b]+$/);

export const emailValidator = (value) => !value ?
    "Email field is required." :
    (emailRegex.test(value) ? "" : "Email is not in a valid format.");
export const stValidator = (value) => !value ?
    "Street number is required" :
    stRegex.test(value) ? "" : "Street number should be a number.";
export const userNameValidator = (value) => !value ?
    "User Name is required" :
    value.length < 5 ? "User name should be at least 5 characters long." : "";
export const phoneValidator = (value) => !value ?
    "Phone number is required." :
    phoneRegex.test(value) ? "" : "Not a valid phone number.";

export const requiredValidator = (value) => value ? "" : "Error: This field is required.";
export const addressValidator = (value) => value ? "" : "Address is required.";

const userNameGetter = getter('username');
const emailGetter = getter('email');

export const formValidator = (values) => {
    const userName = userNameGetter(values);
    const emailValue = emailGetter(values);

    if (userName && emailValue && emailRegex.test(emailValue)) {
        return {};
    }

    return {
        VALIDATION_SUMMARY: 'Please fill in the following fields.',
        ['username']: !userName ? 'User Name is required.' : '',
        ['email']: emailValue && emailRegex.test(emailValue) ? '' : 'Email is required and should be in a valid format.'
    };
};
