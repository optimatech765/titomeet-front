
import React from 'react';
import { ResumeStepperComponent } from './resume.stepper.component';

const ResumeComponent = ({ setActiveStep }: { setActiveStep: (value:string) => void }) => {
    return (
        <div className=''>
            <ResumeStepperComponent setActiveStep={setActiveStep} />
        </div>
    );
}

export default ResumeComponent;
