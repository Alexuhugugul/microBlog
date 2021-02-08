import mainHTML from '../pages/main.html'

export default class MainView {
    render ( data ) {
        let app = document.getElementById( 'app' )
        let html = mainHTML

        for ( let key in data ) {
            html = html.replace( `[${key}]`, data[ key ] )
        }

        app.innerHTML = html
    }
}
