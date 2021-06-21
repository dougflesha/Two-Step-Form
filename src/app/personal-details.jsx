import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormUpload
} from './form-components';

import {
    userNameValidator, emailValidator, phoneValidator
} from './validators'

export const PersonalDetails = (
  <div>
    <Field
      key={'userName'}
      id={'userName'}
      name={'userName'}
      label={'First name'}
      component={FormInput}
      validator={userNameValidator}
        />
      <Field
      key={'lastUserName'}
      id={'lastUserName'}
      name={'lastUserName'}
      label={'Last name'}
      component={FormInput}
      validator={userNameValidator}
        />
    <Field
      key={'email'}
      id={'email'}
      name={'email'}
      label={'Email'}
      hint={'Hint: Enter your personal email address.'}
      type={'email'}
      component={FormInput}
      validator={emailValidator}
        />
    <Field
      key={'phoneNumber'}
      id={'phoneNumber'}
      name={'phoneNumber'}
      label={'Phone number'}
      type={'phone'}
      component={FormInput}
      validator={phoneValidator}
        />
    
  </div>
);
