import React, {memo, useEffect} from 'react';
import { useAsync } from 'react-async';
import SignUp, { SignUpProps } from './SignUp.component';
import { submitEmailOrMobile } from '../../../helpers/internalApi';

type SignUpContainerProps = SignUpProps & {
  onSubmit(): void;
};

function SignUpContainer(props: SignUpContainerProps) {
  const submission = useAsync({ deferFn: submitEmailOrMobile });

  const onSubmit = (data: any) => {
    submission.run(data);
  };

  useEffect(() => {
    if (submission.status === 'fulfilled') {
      props.onSubmit();
    }
  }, [submission.status])

  return (
    <SignUp signUpMethod={props.signUpMethod} onTabChange={props.onTabChange} onSubmit={onSubmit} />
  );
}

export default memo(SignUpContainer);
