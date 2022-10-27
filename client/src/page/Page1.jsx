import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/apiCalls';
import { sampleApi } from '../utils/APIRoutes';

function Page1() {
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('userInfo', userInfo);
    console.log('sampleApi', sampleApi);
    updateUser('url', { name: 'carl', email: 'email@gmial.com.tw' }, dispatch);
  }, []);
  return (
    <div
      onClick={() => {
        console.log(userInfo);
      }}
    >
      Page1
    </div>
  );
}

export default Page1;
