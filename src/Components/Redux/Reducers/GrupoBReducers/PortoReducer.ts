import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Porto',
  initialState: { 
    Nome: 'FC Porto',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    PortoRod1: 0,
    PortoRod2: 0,
    PortoRod3: 0,
    PortoRod4: 0,
    PortoRod5: 0,
    PortoRod6: 0,
  },
  reducers: {
    PortosetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    PortosetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      PortosetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      PortosetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      PortosetSG: (state, action) => {
        state.SG = action.payload
      },
      PortoRod1: (state, action) => {
        state.PortoRod1 = action.payload
      },
      PortoRod2: (state, action) => {
        state.PortoRod2 = action.payload
      },
      PortoRod3: (state, action) => {
        state.PortoRod3 = action.payload
      },
      PortoRod4: (state, action) => {
        state.PortoRod4 = action.payload
      },
      PortoRod5: (state, action) => {
        state.PortoRod5 = action.payload
      },
      PortoRod6: (state, action) => {
        state.PortoRod6 = action.payload
      },

  }
});

export const {PortosetPontos, PortosetJogos, PortosetGolsPro, PortosetGolsC, PortosetSG, PortoRod1, PortoRod2, PortoRod3, PortoRod4, PortoRod5, PortoRod6} = slice.actions
export default slice.reducer