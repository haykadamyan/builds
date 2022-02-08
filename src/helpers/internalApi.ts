export const submitEmailOrMobile = ([data]: any) => {
  console.log('--submitEmailOrMobile--', data);
  return Promise.resolve();
};

export const submitOtp = ([data]: any) => {
  console.log('--submitOtp--', data);
  return Promise.resolve();
};

export const submitProfileDetails = ([data]: any) => {
  console.log('--submitProfileDetails--', data);
  return data.username === 'john' ? Promise.reject('Account ID already taken!') : Promise.resolve();
};
