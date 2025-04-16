
const app = document.getElementById("app");

// Función para cargar el contenido dinámicamente
const loadContent = async (page) => {
    const response = await fetch(`Documents/${page}.html`);
    const content = await response.text();
    app.innerHTML = content;
};

const loadContentCss = async (page) => {
    const response = await fetch(`Documents/css/${page}.html`);
    const content = await response.text();
    app2.innerHTML = content;
};

const loadContentHtml = async (page) => {
    const response = await fetch(`Documents/html/${page}.html`);
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
            loadContentCss("cssStilos");
            break;
        case "/css/selectors":
            loadContentCss("cssSelectores");
            break;
        case "/css/pseudoclass":
            loadContentCss("cssPseudoClases");
            break;
        case "/css/psudoelement":
            loadContentCss("cssPseudoElementos");
            break;
        case "/css/algoritme":
            loadContentCss("cssAlgoritmo");
            break;
        case "/css/variables":
            loadContentCss("cssVariables");
            break;
        case "/css/boxmodel":
            loadContentCss("cssBoxModel");
            break;
        case "/css/position":
            loadContentCss("cssPosicion");
            break;
        // case "/contact":
        //     loadContent("");
        //     break;
        case "/html":
            loadContent("staticHtml");
            break;
        case "/html/tags":
            loadContentHtml("htmlTags");
            break;
        case "/html/list":
            loadContentHtml("htmlList");
            break;
        case "/html/forms":
            loadContentHtml("htmlForms");
            break;
        case "/html/multimedia":
            loadContentHtml("htmlMultimedia");
        break;
        case "/html/iframes":
            loadContentHtml("htmlIframe");
            break;
        default:
            app.innerHTML = "<h2>404 - Página no encontrada</h2>";
    }
};

// Escucha cambios en el hash
window.addEventListener("hashchange", router);
window.addEventListener("load", router);