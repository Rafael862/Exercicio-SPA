import { Roteamento } from "./routes.js";

const rota = new Roteamento()

rota.adicionar('/', '/pages/home.html')
rota.adicionar('/home', '/pages/home.html')
rota.adicionar('/universo', '/pages/universo.html')
rota.adicionar('/exploracao', '/pages/exploracao.html')
rota.adicionar(404, '/pages/404.html')

rota.fazRota()

window.onpopstate = () => rota.fazRota()
window.rota = () => rota.rota()