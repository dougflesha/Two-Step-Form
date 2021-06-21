import * as React from 'react';

import { Field } from '@progress/kendo-react-form';

import {
    FormInput, FormDropDownList
} from './form-components';

import {
  stValidator, requiredValidator
} from './validators'

import {
    countries, genders
} from './data'

export const AddressDetails = (
  <div>
    <Field
      key={'streetNumber'}
      id={'streetNumber'}
      name={'streetNumber'}
      label={'Street Number'}
      component={FormInput}
      validator={stValidator}
        />
    <Field
      key={'streetName'}
      id={'streetName'}
      name={'streetName'}
      label={'Street Name'}
      component={FormInput}
      validator={requiredValidator}
        />
    <Field
      key={'streetType'}
      id={'streetType'}
      name={'streetType'}
      label={'Street Type'}
      component={FormDropDownList}
      validator={requiredValidator}
        />
    <Field
      key={'suburb'}
      id={'suburb'}
      name={'suburb'}
      label={'Suburb'}
      component={FormInput}
      validator={requiredValidator}
        />
    <Field
      key={'postalCode'}
      id={'postalCode'}
      name={'postalCode'}
      label={'Postal Code'}
      component={FormInput}
      validator={requiredValidator}
        />
  </div>
);
