export class Roteamento{

    rotas = {}

    adicionar(nomeDaRota, pagina){
        this.rotas[nomeDaRota] = pagina
    }
    rota(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.fazRota()
    }

    fazRota(){
        const { pathname } = window.location
        const route = this.rotas[pathname] || this.rotas[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}