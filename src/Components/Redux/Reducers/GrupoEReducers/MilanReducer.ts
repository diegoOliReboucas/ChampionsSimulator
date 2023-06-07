import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Milan',
  initialState: { 
    Nome: 'Milan',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    MilanRod1: 0,
    MilanRod2: 0,
    MilanRod3: 0,
    MilanRod4: 0,
    MilanRod5: 0,
    MilanRod6: 0,
  },
  reducers: {
    MilansetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    MilansetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      MilansetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      MilansetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      MilansetSG: (state, action) => {
        state.SG = action.payload
      },
      MilanRod1: (state, action) => {
        state.MilanRod1 = action.payload
      },
      MilanRod2: (state, action) => {
        state.MilanRod2 = action.payload
      },
      MilanRod3: (state, action) => {
        state.MilanRod3 = action.payload
      },
      MilanRod4: (state, action) => {
        state.MilanRod4 = action.payload
      },
      MilanRod5: (state, action) => {
        state.MilanRod5 = action.payload
      },
      MilanRod6: (state, action) => {
        state.MilanRod6 = action.payload
      },

  }
});

export const {MilansetPontos, MilansetJogos, MilansetGolsPro, MilansetGolsC, MilansetSG, MilanRod1, MilanRod2, MilanRod3, MilanRod4, MilanRod5, MilanRod6} = slice.actions
export default slice.reducer