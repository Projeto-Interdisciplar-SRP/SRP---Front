import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './componentes/Auth';


// Telas do Usuario
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';
import Cancelamento from './componentes/Cancelamento';
import Profile from './componentes/Perfil';
import EditarPerfil from './componentes/EditarPerfil.jsx';
import Inicio from './componentes/Inicio';

import OnibusCoordenador from './componentes/coordenador/visao/OnibusCoordenador';
import ReservaCoordenador from './componentes/coordenador/visao/ReservaCoordenador';

import CadastroCoordenador from './componentes/coordenador/CadastroCoordenador';
import ConfirmarCoordenador from './componentes/coordenador/ConfirmarCoordenador';
import DetalhesCoordenador from './componentes/coordenador/DetalhesCoordenador';
import ListarCoodenador from './componentes/coordenador/ListaCoordenador';
import EditarCoordenador from './componentes/coordenador/EditarCoordenador';

import Sobre from "./componentes/Sobre.jsx";

import Welcome from "./componentes/Welcome";

//Telas Secretaria
import Secretaria from './componentes/secretaria/InicioSecretaria';

import PessoaCoordenador from './componentes/coordenador/visao/PessoaCoordenador.jsx';
import CadastroOnibus from './componentes/onibus/CadastroOnibus';
import ListarOnibus from './componentes/onibus/CadastroOnibus';
import EditarOnibus from './componentes/onibus/EditarOnibus';
import DetalhesOnibus from './componentes/onibus/DetalhesOnibus';

import CadastroViagem from './componentes/viagem/CadastroViagem';
import ListarViagem from './componentes/viagem/ListarViagem';
import Editarviagem from './componentes/viagem/EditarViagem';
import Detalhesviagem from './componentes/viagem/DetalhesViagem';

import Pagamento from './componentes/Pagamento.jsx'

import Paróquia from './componentes/paroquias/Paróquias';

import RelatórioPagamento from './componentes/secretaria/RelatórioPagamento.jsx'
import OnibusSecretaria from './componentes/secretaria/visao/OnibusSecretaria.jsx';
import CoordenadorSecretaria from './componentes/secretaria/visao/CoodenadorSecretaria.jsx';



const App = () => {

  return (
    <Router>
      <Routes>
      
          <Route path="/" element={<Welcome/>}/>

          {/*ROTA AUTENTICADA (PRECISA ESTAR AUTENTICADO)*/}
          {/*QUANDO VOCE VER ESSE <AuthProvider> QUER DIZER QUE PRECISA ESTAR AUTENTICADO..*/}
          <Route path="/inicio" element={<AuthProvider> <Inicio /> </AuthProvider>}/>          
          <Route path="/perfil" element={<AuthProvider> <Profile /> </AuthProvider>}/>          
          <Route path="/perfil/editar" element={<AuthProvider> <EditarPerfil /> </AuthProvider>}/>          
          <Route path="/perfil/cancelamento"element={<AuthProvider> <Cancelamento /> </AuthProvider>}/>

          <Route path="/login" element={<Login/>}/>
          
          <Route path="/cadastro" element={<Cadastro />} />
          
          <Route path="/cadastro/coordenador" element={<CadastroCoordenador />} />

          <Route path="/sobre" element={<Sobre />} />

          <Route path='/coordenador/onibus' element={<AuthProvider> <OnibusCoordenador /> </AuthProvider>}/>
          <Route path='/adm/onibus' element={<AuthProvider> <OnibusCoordenador /> </AuthProvider>}/>
          <Route path='/coordenador/reservas' element={<AuthProvider> <ReservaCoordenador /> </AuthProvider>}/>

          <Route path='/secretaria/onibus' element={<AuthProvider> <OnibusSecretaria/> </AuthProvider>}/>
          <Route path='/secretaria/coordenador' element={<AuthProvider> <CoordenadorSecretaria/> </AuthProvider>}/>
          
          <Route path="/secretaria/cadastro/coordenador" element={<CadastroCoordenador />} />
          <Route path="/confirmar/cadastro/coordenador" element={<ConfirmarCoordenador />} />
          <Route path="/secretaria/listar/usuarios" element={ <PessoaCoordenador /> } />
          <Route path="/secretaria/listar/coordenadores" element={ <ListarCoodenador /> } />
          <Route path="/secretaria/listar/coordenador/detalhes" element={ <DetalhesCoordenador /> } />
          <Route path="/secretaria/listar/coordenador/editar" element={ <EditarCoordenador /> } />

          <Route path="/secretaria" element={<AuthProvider> <Secretaria /> </AuthProvider>} />

          <Route path="/secretaria/cadastro/onibus" element={ <CadastroOnibus /> } />
          <Route path="/secretaria/listar/onibus" element={ <ListarOnibus /> } />
          <Route path="/secretaria/listar/onibus/detalhes" element={ <DetalhesOnibus /> } />
          <Route path="/secretaria/listar/onibus/editar" element={ <EditarOnibus /> } />

          <Route path="/secretaria/cadastro/viagem" element={ <CadastroViagem /> } />
          <Route path="/secretaria/listar/viagem" element={ <ListarViagem /> } />
          <Route path="/secretaria/listar/viagem/detalhes" element={ <Editarviagem /> } />
          <Route path="/secretaria/listar/viagem/editar" element={ <Detalhesviagem /> } />

          <Route path="/pagamento" element={ <Pagamento /> } />
          <Route path="/cancelamento" element={ <Cancelamento /> } />
          <Route path="/relatorio" element={ <RelatórioPagamento /> } />

          <Route path="/paroquias" element={ <Paróquia /> } />
          
      </Routes>
    </Router>
  );

};

export default App;
