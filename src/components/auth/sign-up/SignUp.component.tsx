import React, { memo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';

const Tab = styled(TabUnstyled)`
  color: #6F6E73;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  margin: 0 6px;

  &:focus {
    color: #fff;
    border-radius: 10px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #FCFCFC;
    color: #414047;
    border-color: #BEBEC2;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

export type SignUpProps = {
  signUpMethod: string | number;
  onTabChange(event: React.SyntheticEvent, newValue: string | number): void;
  onSubmit(data: any): void;
};

function SignUp(props: SignUpProps) {
  const { signUpMethod } = props;

  const {
    register,
    handleSubmit,
    formState: { isValid },
    control,
    reset
  } = useForm({
    mode: 'onChange',
  });

  const onTabChange = (event: React.SyntheticEvent, value: number | string) => {
    reset();
    props.onTabChange(event, value);
  };

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Box mt={2.5}>
        <TabsUnstyled value={signUpMethod} onChange={onTabChange}>
          <TabsList>
            <Tab value="email">Email</Tab>
            <Tab value="phone">Phone</Tab>
          </TabsList>
          <Box mt={3} mb={2.5}>
            <TabPanel value="email">
              <Controller
                control={control}
                {...register('email', {
                  required: signUpMethod === 'email',
                })}
                render={({ field }) => (
                  <TextField {...field} fullWidth variant="outlined" placeholder="Ex johndoe@gmail.com" />
                )}
              />
            </TabPanel>
            <TabPanel value="phone">
              <Controller
                control={control}
                {...register('phone', {
                  required: signUpMethod === 'phone',
                })}
                render={({ field }) => (
                  <TextField {...field} fullWidth variant="outlined" placeholder="Ex (337) 378 8383" />
                )}
              />
            </TabPanel>
          </Box>
        </TabsUnstyled>
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
            by clicking continue you must agree to near labs <a href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> ans <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
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
  );
}

export default memo(SignUp);
