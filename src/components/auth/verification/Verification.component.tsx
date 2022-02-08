import React, {memo, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import ReactCodeInput from 'react-verification-code-input';

export type VerificationProps = {
  signUpMethod: string | number;
  onSubmit(otp: string): void;
};

function Verification(props: VerificationProps) {
  const { signUpMethod } = props;

  const [value, setValue] = useState('');

  const onSubmit = () => {
    props.onSubmit(value);
  };

  return (
    <Box mt={2.5} sx={{ textAlign: 'center' }}>
      <Box mx={4}>
        <Typography>
          We've sent a 6-digit verification code to the {signUpMethod === 'email' ? 'email address' : 'phone'}
        </Typography>
      </Box>
      <Typography sx={{ mb: 3 }} color="#587BE0">
        {signUpMethod === 'email' ? 'johndoe@gmail.com' : '+1 4747948894'}
      </Typography>
      <Typography sx={{ mb: 1 }} color="#808080">
        Enter verification code
      </Typography>
      <Box mb={4}>
        <ReactCodeInput
          onChange={setValue}
        />
      </Box>
      <Button
        variant="contained"
        type="submit"
        disabled={value.length !== 6}
        endIcon={<ArrowForwardIosIcon />}
        onClick={onSubmit}
      >
        Continue
      </Button>
      <Box my={3}>
        <div className="line" />
      </Box>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Didn't receive your code?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }} color="#587BE0">
        Send to a different email address
      </Typography>
      <Typography variant="body1" color="#587BE0">
        Resend your code
      </Typography>
    </Box>
  );
}

export default memo(Verification);
