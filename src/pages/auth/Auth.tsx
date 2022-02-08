import React, {memo, useMemo, useState} from 'react';
import AuthLayout from '../../components/layout/auth-layout/AuthLayout.component';
import SignUp from '../../components/auth/sign-up/SignUp.container';
import Verification from '../../components/auth/verification/Verification.container';
import CreateAccount from '../../components/auth/create-account/CreateAccount.container';

const PROCESS_STEPS = {
  SIGN_UP: 'signUp',
  VERIFICATION: 'verification',
  CREATE_ACCOUNT: 'createAccount',
  COMPLETE: 'complete',
};

function Auth() {
  const [step, setStep] = useState(PROCESS_STEPS.SIGN_UP);
  const [signUpMethod, setSignUpMethod] = useState<string | number>('email');

  const handleChange = (event: React.SyntheticEvent, newValue: string | number) => {
    setSignUpMethod(newValue);
  };

  const onSubmitEmailOrMobile = () => {
    setStep(PROCESS_STEPS.VERIFICATION)
  };

  const onSubmitVerification = () => {
    setStep(PROCESS_STEPS.CREATE_ACCOUNT);
  };

  const onSubmitCreateAccount = () => {
    setStep(PROCESS_STEPS.COMPLETE);
  };

  const headerTitle = useMemo(() => {
    switch (step) {
      case PROCESS_STEPS.VERIFICATION:
        return 'Verification';
      case PROCESS_STEPS.CREATE_ACCOUNT:
        return 'Create NEAR account';
      default:
        return '';
    }
  }, [step]);

  return (
    <AuthLayout
      headerProps={{
        title: headerTitle,
      }}
    >
      {step === PROCESS_STEPS.SIGN_UP && (
        <SignUp
          signUpMethod={signUpMethod}
          onTabChange={handleChange}
          onSubmit={onSubmitEmailOrMobile}
        />
      )}
      {step === PROCESS_STEPS.VERIFICATION && (
        <Verification signUpMethod={signUpMethod} onSubmit={onSubmitVerification} />
      )}
      {step === PROCESS_STEPS.CREATE_ACCOUNT && (
        <CreateAccount onSubmit={onSubmitCreateAccount} />
      )}
      {step === PROCESS_STEPS.COMPLETE && (
        <div>
          <div>
            complete!
          </div>
        </div>
      )}
    </AuthLayout>
  );
}

export default memo(Auth);
