import MainView from "../views/main";

export function actionMain () {
    const view = new MainView()

    view.render({ text: 'Hello' })
}
