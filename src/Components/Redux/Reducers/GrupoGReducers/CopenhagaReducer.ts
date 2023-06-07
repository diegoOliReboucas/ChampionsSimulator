import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'Copenhaga',
  initialState: { 
    Nome: 'FC Copenhaga',
    Pontos: 0,
    Jogos: 0,
    GolsPro: 0,
    GolsC: 0,
    SG: 0,
    CopenhagaRod1: 0,
    CopenhagaRod2: 0,
    CopenhagaRod3: 0,
    CopenhagaRod4: 0,
    CopenhagaRod5: 0,
    CopenhagaRod6: 0,
  },
  reducers: {
    CopenhagasetPontos: (state, action) => {
      state.Pontos = action.payload
    },
    CopenhagasetJogos: (state, action) => {
        state.Jogos = action.payload
      },
      CopenhagasetGolsPro: (state, action) => {
        state.GolsPro = action.payload
      },
      CopenhagasetGolsC: (state, action) => {
        state.GolsC = action.payload
      },
      CopenhagasetSG: (state, action) => {
        state.SG = action.payload
      },
      CopenhagaRod1: (state, action) => {
        state.CopenhagaRod1 = action.payload
      },
      CopenhagaRod2: (state, action) => {
        state.CopenhagaRod2 = action.payload
      },
      CopenhagaRod3: (state, action) => {
        state.CopenhagaRod3 = action.payload
      },
      CopenhagaRod4: (state, action) => {
        state.CopenhagaRod4 = action.payload
      },
      CopenhagaRod5: (state, action) => {
        state.CopenhagaRod5 = action.payload
      },
      CopenhagaRod6: (state, action) => {
        state.CopenhagaRod6 = action.payload
      },

  }
});

export const {CopenhagasetPontos, CopenhagasetJogos, CopenhagasetGolsPro, CopenhagasetGolsC, CopenhagasetSG, CopenhagaRod1, CopenhagaRod2, CopenhagaRod3, CopenhagaRod4, CopenhagaRod5, CopenhagaRod6} = slice.actions
export default slice.reducer