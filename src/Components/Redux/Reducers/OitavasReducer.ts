import {createSlice} from '@reduxjs/toolkit'

type propsTimes = {
  time: string,
  quartasIda: number,
  quartasVolta: number
};

export const slice = createSlice({
  name: 'Oitavas de Final',
  initialState: <propsTimes[]> [],
  reducers: {
    setTimesOit: (state, action) => {
    state.push(action.payload)
    }
  }
});

export const {setTimesOit} = slice.actions
export default slice.reducer