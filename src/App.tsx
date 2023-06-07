import React from 'react';
import * as C from './Styled'
import './App.css'

import { GrupoA } from './Components/GrupoA/Index';
import { GrupoB } from './Components/GrupoB/Index';
import { GrupoC } from './Components/GrupoC/Index';
import { GrupoD } from './Components/GrupoD/Index';
import { GrupoE } from './Components/GrupoE/Index';
import { GrupoF } from './Components/GrupoF/Index';
import { GrupoG } from './Components/GrupoG/Index';
import { GrupoH } from './Components/GrupoH/Index';
import { Jogos1 } from './Components/Jogos1/Index';
import { Jogos2 } from './Components/Jogos2/Index';
import { Jogos3 } from './Components/Jogos3/Index';
import { Jogos4 } from './Components/Jogos4/Index';
import { Jogos5 } from './Components/Jogos5/Index';
import { Jogos6 } from './Components/Jogos6/Index';
import { Rodada1 } from './Components/Rodada1/Index';
import { Rodada2 } from './Components/Rodada2/Index';
import { Rodada3 } from './Components/Rodada3/Index';
import { Rodada4 } from './Components/Rodada4/Index';
import { Rodada5 } from './Components/Rodada5/Index';
import { Rodada6 } from './Components/Rodada6/Index';
import { FimGrupos } from './Components/FimGrupos/Index';
import { Eliminatoria } from './Components/Eliminatoria/Index';

function App() {
  return (
    <C.Main>

      <Eliminatoria />
      <C.Grupos>
      <GrupoA />
      <GrupoB />
      <GrupoC />
      <GrupoD />
      <GrupoE />
      <GrupoF />
      <GrupoG />
      <GrupoH />
      </C.Grupos>
      <C.Jogos>
      <Jogos1 />
      <Jogos2 />
      <Jogos3 />
      <Jogos4 />
      <Jogos5 />
      <Jogos6 />
      <Rodada1 />
      <Rodada2 />
      <Rodada3 />
      <Rodada4 />
      <Rodada5 />
      <Rodada6 />
      <FimGrupos />
      </C.Jogos>

      </C.Main>
  );
}

export default App;
