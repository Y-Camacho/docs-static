
const app = document.getElementById("app");

// Función para cargar el contenido dinámicamente
const loadContent = async (page) => {
    const response = await fetch(`Documents/${page}.html`);
    const content = await response.text();
    app.innerHTML = content;
};

const loadContent2 = async (page) => {
    const response = await fetch(`Documents/css/${page}.html`);
    const content = await response.text();
    app2.innerHTML = content;
};

// Manejador de rutas
const router = () => {
    const route = location.hash.slice(1) || "/";
    
    switch (route) {
        case "/":
            app.innerHTML = '<div class="container d-flex align-items-center p-3 my-3 text-white bg-teal rounded shadow-sm"><div class="lh-1"><h1 class="h6 mb-0 text-white lh-1">Yostin Camacho</h1><small>Documentación de contenido estático</small></div></div>';
            break;
        case "/css":
            loadContent("staticCss");
            break;
        case "/css/how-to-use":
            loadContent2("cssStilos");
            break;
        case "/css/selectors":
            loadContent2("cssSelectores");
            break;
        case "/css/pseudoclass":
            loadContent2("cssPseudoClases");
            break;
        case "/css/psudoelement":
            loadContent2("cssPseudoElementos");
            break;
        case "/css/algoritme":
            loadContent2("cssAlgoritmo");
            break;
        case "/css/variables":
            loadContent2("cssVariables");
            break;
        case "/css/boxmodel":
            loadContent2("cssBoxModel");
            break;
        case "/css/position":
            loadContent2("cssPosicion");
            break;
        // case "/contact":
        //     loadContent("");
        //     break;
        default:
            app.innerHTML = "<h2>404 - Página no encontrada</h2>";
    }
};

// Escucha cambios en el hash
window.addEventListener("hashchange", router);
window.addEventListener("load", router);