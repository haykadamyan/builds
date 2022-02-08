import React, {memo, useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';

export type CreateAccountProps = {
  errorMessage?: Error | null;
  onSubmit(data: any): void;
};

function CreateAccount(props: CreateAccountProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    control,
    setError,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (props.errorMessage) {
      setError('username', {
        type: 'manual',
        message: props.errorMessage as any,
      });
    }
  }, [props.errorMessage]);

  return (
    <Box mt={2.5}>
      <Box mx={2} mb={3}>
        <Typography color="#808080" mb={4}>
          Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <Box mb={3}>
            <Controller
              control={control}
              {...register('fullName', {
                required: true,
              })}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  placeholder="Ex John Doe"
                />
              )}
            />
          </Box>
          <Box mb={3}>
            <Controller
              control={control}
              {...register('username', {
                required: true,
              })}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={errors?.username}
                  helperText={errors?.username?.message || ''}
                  label="Account ID"
                  fullWidth
                  variant="outlined"
                  placeholder="Ex John Doe"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">.near</InputAdornment>,
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Box mb={3}>
              <Button
                variant="contained"
                type="submit"
                endIcon={<ArrowForwardIosIcon />}
                disabled={!isValid}
              >
                Continue
              </Button>
            </Box>
            <Box mx={4}>
              <Typography variant="body2">
                By clicking continue you must agree to near labs <a href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> ans <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              </Typography>
            </Box>
            <Box my={3}>
              <div className="line" />
            </Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Already have NEAR account?
            </Typography>
            <Button variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Log in with NEAR</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default memo(CreateAccount);
