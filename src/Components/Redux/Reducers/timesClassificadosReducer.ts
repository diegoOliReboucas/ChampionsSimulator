import {createSlice} from '@reduxjs/toolkit'

type propsTimes = {
  time: string,
  oitavasIda: number,
  oitavasVolta: number
};

export const slice = createSlice({
  name: 'Times Classificados',
  initialState: <propsTimes[]> [],
  reducers: {
    setTimesC: (state, action) => {
    state.push(action.payload)
    }
  }
});

export const {setTimesC} = slice.actions
export default slice.reducer