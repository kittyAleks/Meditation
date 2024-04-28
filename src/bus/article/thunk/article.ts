// // Core
// import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
//
// import * as types from '../types';
// import axios from 'axios';
//
// // Action
// const articleAction = createAction<types>('article/article');
//
// export const articleData = createAsyncThunk<any>(
//   articleAction.type,
//   async (userData, {rejectWithValue}) => {
//     try {
//       const response = await axios.post('/users/register', userData);
//       return response;
//     } catch (err: any) {
//       if (err.response) {
//         return rejectWithValue(err.response);
//       } else {
//         return rejectWithValue({message: 'Something went wrong'});
//       }
//     }
//   },
// );
