import {createSlice} from '@reduxjs/toolkit'

type propsTimes = {
  time: string,
  FinalRes: number
};

export const slice = createSlice({
  name: 'SemiFinal',
  initialState: <propsTimes[]> [],
  reducers: {
    setTimesSemi: (state, action) => {
    state.push(action.payload)
    }
  }
});

export const {setTimesSemi} = slice.actions
export default slice.reducer