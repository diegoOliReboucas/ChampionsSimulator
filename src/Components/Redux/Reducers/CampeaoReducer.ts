import {createSlice} from '@reduxjs/toolkit'

type propsTimes = {
  time: string,
};

export const slice = createSlice({
  name: 'Final',
  initialState: <propsTimes[]> [],
  reducers: {
    setTimeCampeao: (state, action) => {
    state.push(action.payload)
    }
  }
});

export const {setTimeCampeao} = slice.actions
export default slice.reducer