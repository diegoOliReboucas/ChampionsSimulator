import {configureStore} from '@reduxjs/toolkit'
import showReducer from './Reducers/showReducer'
import NapoliReducer from './Reducers/GrupoAReducers/NapoliReducer'
import LiverpoolReducer from './Reducers/GrupoAReducers/LiverpoolReducer'
import AjaxReducer from './Reducers/GrupoAReducers/AjaxReducer'
import RangersReducer from './Reducers/GrupoAReducers/RangersReducer'

import AtleticoMReducer from './Reducers/GrupoBReducers/AtleticoMReducer'
import BayerLReducer from './Reducers/GrupoBReducers/BayerLReducer'
import BruggeReducer from './Reducers/GrupoBReducers/BruggeReducer'
import PortoReducer from './Reducers/GrupoBReducers/PortoReducer'

import BayernMReducer from './Reducers/GrupoCReducers/BayernMReducer'
import BarcelonaReducer from './Reducers/GrupoCReducers/BarcelonaReducer'
import InterReducer from './Reducers/GrupoCReducers/InterReducer'
import PlzenReducer from './Reducers/GrupoCReducers/PlzenReducer'

import FrankfurtReducer from './Reducers/GrupoDReducers/FrankfurtReducer'
import MarselhaReducer from './Reducers/GrupoDReducers/MarselhaReducer'
import SportingReducer from './Reducers/GrupoDReducers/SportingReducer'
import TottenhamReducer from './Reducers/GrupoDReducers/TottenhamReducer'

import ChelseaReducer from './Reducers/GrupoEReducers/ChelseaReducer'
import DinamoReducer from './Reducers/GrupoEReducers/DinamoReducer'
import MilanReducer from './Reducers/GrupoEReducers/MilanReducer'
import SalzburgReducer from './Reducers/GrupoEReducers/SalzburgReducer'

import CelticReducer from './Reducers/GrupoFReducers/CelticReducer'
import LeipzigReducer from './Reducers/GrupoFReducers/LeipzigReducer'
import RealMReducer from './Reducers/GrupoFReducers/RealMReducer'
import ShakhtarReducer from './Reducers/GrupoFReducers/ShakhtarReducer'

import CopenhagaReducer from './Reducers/GrupoGReducers/CopenhagaReducer'
import DortmundReducer from './Reducers/GrupoGReducers/DortmundReducer'
import ManCReducer from './Reducers/GrupoGReducers/ManCReducer'
import SevillaReducer from './Reducers/GrupoGReducers/SevillaReducer'

import BenficaReducer from './Reducers/GrupoHReducers/BenficaReducer'
import JuventusReducer from './Reducers/GrupoHReducers/JuventusReducer'
import MaccabiReducer from './Reducers/GrupoHReducers/MaccabiReducer'
import PSGReducer from './Reducers/GrupoHReducers/PSGReducer'
import timesClassificadosReducer from './Reducers/timesClassificadosReducer'
import OitavasReducer from './Reducers/OitavasReducer'
import QuartasReducer from './Reducers/QuartasReducer'
import FinalReducer from './Reducers/SemiReducer'
import SemiReducer from './Reducers/SemiReducer'
import CampeaoReducer from './Reducers/CampeaoReducer'


export const store = configureStore({
  reducer: {
    show: showReducer,
    TimesC: timesClassificadosReducer,
    OitTimes: OitavasReducer,
    QuaTimes: QuartasReducer,
    SemiTimes: SemiReducer,
    CampeaoTime: CampeaoReducer,
    //Grupo A
    Napoli: NapoliReducer,
    Liverpool: LiverpoolReducer,
    Ajax: AjaxReducer,
    Rangers: RangersReducer,
    //Grupo B
    AtleticoM: AtleticoMReducer,
    BayerL: BayerLReducer,
    Brugge: BruggeReducer,
    Porto: PortoReducer,
    //Grupo C
    BayernM: BayernMReducer,
    Barcelona: BarcelonaReducer,
    Inter: InterReducer,
    Plzen: PlzenReducer,
    //Grupo D
    Frankfurt: FrankfurtReducer,
    Marselha: MarselhaReducer,
    Sporting: SportingReducer,
    Tottenham: TottenhamReducer,
    //Grupo E
    Chelsea: ChelseaReducer,
    Dinamo: DinamoReducer,
    Milan: MilanReducer,
    Salzburg: SalzburgReducer,
    //Grupo F
    Celtic: CelticReducer,
    Leipzig: LeipzigReducer,
    RealM: RealMReducer,
    Shakhtar: ShakhtarReducer,
    //Grupo G
    Copenhaga: CopenhagaReducer,
    Dortmund: DortmundReducer,
    ManC: ManCReducer,
    Sevilla: SevillaReducer,
    //Grupo H
    Benfica: BenficaReducer,
    Juventus: JuventusReducer,
    Maccabi: MaccabiReducer,
    PSG: PSGReducer
  }
})

export type rootState = ReturnType<typeof store.getState>