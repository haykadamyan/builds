import React, {memo, useEffect, useState} from 'react';
import { useAsync } from 'react-async';
import CreateAccount, { CreateAccountProps } from './CreateAccount.component';
import { submitProfileDetails } from '../../../helpers/internalApi';

type CreateAccountContainerProps = CreateAccountProps & {
  onSubmit(): void;
};

function CreateAccountContainer(props: CreateAccountContainerProps) {
  const submission = useAsync({ deferFn: submitProfileDetails });
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);

  const onSubmit = (data: any) => {
    submission.run(data);
  };

  useEffect(() => {
    if (submission.status === 'fulfilled') {
      props.onSubmit();
    }
    if (submission.status === 'rejected') {
      setErrorMessage(submission.error);
    }
  }, [submission.status]);

  return (
    <CreateAccount errorMessage={errorMessage} onSubmit={onSubmit} />
  );
}

export default memo(CreateAccountContainer);
