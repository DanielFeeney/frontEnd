import Home from './components/home/Home.vue';
import ListarEmpresa from './components/empresa/ListarEmpresa.vue';
import Empresa from './components/empresa/Empresa.vue';
import ListarCandidato from './components/candidato/ListarCandidato.vue';
import Candidato from './components/candidato/Candidato.vue';

export const routes = [
    {path: '', name: 'home', titulo: 'Home', component: Home},
    {path: '/listar-empresa', name: 'listarEmpresa', titulo: 'Empresa', component: ListarEmpresa},    
    {path: '/empresa', name:'novoCadastro', component: Empresa},
    {path: '/empresa/:id', name:'editarEmpresa', component: Empresa},
    {path: '/listar-candidato', name: 'listarCandidato', titulo: 'Candidato', component: ListarCandidato},    
    {path: '/candidato', name:'novoCadastro', component: Candidato},
    {path: '/candidato/:id', name:'editarCandidato', component: Candidato}
]