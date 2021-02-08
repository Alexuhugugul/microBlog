import { actionMain } from "./controllers/main";

export default function () {
    const { pathname } = window.location;

    switch ( pathname ) {
        case "/":
            actionMain()
            break;
    }
}