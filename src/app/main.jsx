import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';

import { PersonalDetails } from './personal-details';
import { AddressDetails } from './address-details';
import { DisplayData } from './display-data';

const stepPages = [
    PersonalDetails,
    AddressDetails,
    DisplayData
];

export const App = () => {
    const [step, setStep] = React.useState(0);
    const [formState, setFormState] = React.useState({});
    const [steps, setSteps] = React.useState([
        { label: 'Personal Details', isValid: undefined },
        { label: 'Address', isValid: undefined },
        { label: 'Display data', isValid: undefined }
    ]);

    const lastStepIndex = steps.length - 1;
    const isLastStep = lastStepIndex === step;
    const isPreviousStepsValid = steps
        .slice(0, step)
        .findIndex(currentStep => currentStep.isValid === false) === -1;

    const onStepSubmit = React.useCallback(
        (event) => {
            const { isValid, values } = event;

            const currentSteps = steps.map((currentStep, index) => ({
                ...currentStep,
                isValid: index === step ? isValid : currentStep.isValid
            }));

            setSteps(currentSteps);
            setStep(() => Math.min(step + 1, lastStepIndex));
            setFormState(values);

            if (isLastStep && isPreviousStepsValid && isValid) {
                alert(JSON.stringify(values));
            }
        },
        [step, steps, setSteps, setStep, setFormState, isLastStep, isPreviousStepsValid]
    );

    const onPrevClick = React.useCallback(
        (event) => {
            event.preventDefault();
            setStep(() => Math.max(step - 1, 0));
        },
        [step, setStep]
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Stepper value={step} items={steps} />
        <Form
          initialValues={formState}
          onSubmitClick={onStepSubmit}
          render={(formRenderProps) => (
            <div style={{ alignSelf: 'center' }}>
              <FormElement style={{ width: 480 }}>
                {stepPages[step]}
                <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
                <div
                  style={{ justifyContent: 'space-between', alignContent: 'center' }}
                  className={'k-form-buttons k-buttons-end'}
                            >
                  <span style={{ alignSelf: 'center' }}>Step {step + 1} of 3</span>
                  <div>
                    {
                                        step !== 0 ? (
                                          <Button style={{ marginRight: '16px' }} onClick={onPrevClick}>
                                            Previous
                                          </Button>
                                        ) : undefined
                                    }
                    <Button
                      primary={true}
                      disabled={isLastStep ? !isPreviousStepsValid : false}
                      onClick={formRenderProps.onSubmit}
                                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </div>
              </FormElement>
            </div>
                )}
            />
      </div>
    );
};
ReactDOM.render(
  <App />,
    document.querySelector('my-app')
);
