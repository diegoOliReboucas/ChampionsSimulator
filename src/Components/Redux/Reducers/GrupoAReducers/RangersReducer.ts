import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Rangers',
  initialState: { 
    Nome: 'Rangers',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    RangersRod1: 0,
    RangersRod2: 0,
    RangersRod3: 0,
    RangersRod4: 0,
    RangersRod5: 0,
    RangersRod6: 0,
  },
  reducers: {
    RangerssetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    RangerssetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      RangerssetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      RangerssetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      RangerssetSG: (state, action) => {
        state.SG = action.payload
      },
      RangersRod1: (state, action) => {
        state.RangersRod1 = action.payload
      },
      RangersRod2: (state, action) => {
        state.RangersRod2 = action.payload
      },
      RangersRod3: (state, action) => {
        state.RangersRod3 = action.payload
      },
      RangersRod4: (state, action) => {
        state.RangersRod4 = action.payload
      },
      RangersRod5: (state, action) => {
        state.RangersRod5 = action.payload
      },
      RangersRod6: (state, action) => {
        state.RangersRod6 = action.payload
      },

  }
});

export const {RangerssetPontos, RangerssetJogos, RangerssetGolsPro, RangerssetGolsC, RangerssetSG, RangersRod1, RangersRod2, RangersRod3, RangersRod4, RangersRod5, RangersRod6} = slice.actions
export default slice.reducer