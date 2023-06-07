import {createSlice} from '@reduxjs/toolkit'

type propsTimes = {
  time: string,
  semiIda: number,
  semiVolta: number
};

export const slice = createSlice({
  name: 'Quartas de Final',
  initialState: <propsTimes[]> [],
  reducers: {
    setTimesQua: (state, action) => {
    state.push(action.payload)
    }
  }
});

export const {setTimesQua} = slice.actions
export default slice.reducer