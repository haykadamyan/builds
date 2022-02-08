import React, {memo, useEffect} from 'react';
import { useAsync } from 'react-async';
import Verification, { VerificationProps } from './Verification.component';
import { submitOtp } from '../../../helpers/internalApi';

type VerificationContainerProps = VerificationProps & {
  onSubmit(): void;
};

function VerificationContainer(props: VerificationContainerProps) {
  const submission = useAsync({ deferFn: submitOtp });

  const onSubmit = (otp: string) => {
    submission.run(otp);
  };

  useEffect(() => {
    if (submission.status === 'fulfilled') {
      props.onSubmit();
    }
  }, [submission.status])

  return (
    <Verification signUpMethod={props.signUpMethod} onSubmit={onSubmit} />
  );
}

export default memo(VerificationContainer);
