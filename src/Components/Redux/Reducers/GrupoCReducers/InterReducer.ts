import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Inter',
  initialState: { 
    Nome: 'Inter',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    InterRod1: 0,
    InterRod2: 0,
    InterRod3: 0,
    InterRod4: 0,
    InterRod5: 0,
    InterRod6: 0,
  },
  reducers: {
    IntersetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    IntersetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      IntersetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      IntersetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      IntersetSG: (state, action) => {
        state.SG = action.payload
      },
      InterRod1: (state, action) => {
        state.InterRod1 = action.payload
      },
      InterRod2: (state, action) => {
        state.InterRod2 = action.payload
      },
      InterRod3: (state, action) => {
        state.InterRod3 = action.payload
      },
      InterRod4: (state, action) => {
        state.InterRod4 = action.payload
      },
      InterRod5: (state, action) => {
        state.InterRod5 = action.payload
      },
      InterRod6: (state, action) => {
        state.InterRod6 = action.payload
      },

  }
});

export const {IntersetPontos, IntersetJogos, IntersetGolsPro, IntersetGolsC, IntersetSG, InterRod1, InterRod2, InterRod3, InterRod4, InterRod5, InterRod6} = slice.actions
export default slice.reducer