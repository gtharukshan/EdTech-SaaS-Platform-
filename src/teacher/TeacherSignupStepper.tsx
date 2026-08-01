import React, { useState } from 'react';
import { StepIndicator } from './components/StepIndicator';
import { TeacherProfileStep, Step1Data } from './TeacherProfileStep';
import { TeacherAccountStep, Step2Data } from './TeacherAccountStep';
import { TeacherSignupSuccess } from './TeacherSignupSuccess';

interface TeacherSignupStepperProps {
  onComplete: (profile: Step1Data & Step2Data) => void;
}

export const TeacherSignupStepper: React.FC<TeacherSignupStepperProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  const [step1Data, setStep1Data] = useState<Step1Data>({
    fullName: '',
    subject: '',
    address: '',
    degree: '',
  });

  const [step2Data, setStep2Data] = useState<Step2Data>({
    email: '',
    countryCode: '+94',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const handleStep1Next = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Submit = (data: Step2Data) => {
    setStep2Data(data);
    setCurrentStep(3); // Success Screen
  };

  const handleContinueToDashboard = () => {
    onComplete({ ...step1Data, ...step2Data });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xl relative overflow-hidden backdrop-blur-2xl">
      {/* Stepper Header */}
      <StepIndicator currentStep={currentStep} />

      {/* Step Views */}
      {currentStep === 1 && (
        <TeacherProfileStep initialData={step1Data} onNext={handleStep1Next} />
      )}

      {currentStep === 2 && (
        <TeacherAccountStep
          initialData={step2Data}
          onBack={() => setCurrentStep(1)}
          onSubmit={handleStep2Submit}
        />
      )}

      {currentStep === 3 && (
        <TeacherSignupSuccess
          profileData={step1Data}
          accountData={step2Data}
          onContinueToDashboard={handleContinueToDashboard}
        />
      )}
    </div>
  );
};
