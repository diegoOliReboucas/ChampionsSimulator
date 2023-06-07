import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Barcelona',
  initialState: { 
    Nome: 'FC Barcelona',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    BarcelonaRod1: 0,
    BarcelonaRod2: 0,
    BarcelonaRod3: 0,
    BarcelonaRod4: 0,
    BarcelonaRod5: 0,
    BarcelonaRod6: 0,
  },
  reducers: {
    BarcelonasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    BarcelonasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      BarcelonasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      BarcelonasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      BarcelonasetSG: (state, action) => {
        state.SG = action.payload
      },
      BarcelonaRod1: (state, action) => {
        state.BarcelonaRod1 = action.payload
      },
      BarcelonaRod2: (state, action) => {
        state.BarcelonaRod2 = action.payload
      },
      BarcelonaRod3: (state, action) => {
        state.BarcelonaRod3 = action.payload
      },
      BarcelonaRod4: (state, action) => {
        state.BarcelonaRod4 = action.payload
      },
      BarcelonaRod5: (state, action) => {
        state.BarcelonaRod5 = action.payload
      },
      BarcelonaRod6: (state, action) => {
        state.BarcelonaRod6 = action.payload
      },

  }
});

export const {BarcelonasetPontos, BarcelonasetJogos, BarcelonasetGolsPro, BarcelonasetGolsC, BarcelonasetSG, BarcelonaRod1, BarcelonaRod2, BarcelonaRod3, BarcelonaRod4, BarcelonaRod5, BarcelonaRod6} = slice.actions
export default slice.reducer