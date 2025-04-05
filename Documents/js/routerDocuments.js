const app2 = document.getElementById("app2");

console.log("puto")

// Función para cargar el contenido dinámicamente
const loadContent2 = async (page) => {
    const response = await fetch(`css/${page}.html`);
    const content = await response.text();
    app2.innerHTML = content;
};

// Manejador de rutas
const router2 = () => {
    const route = location.hash.slice(1) || "/";
    
    switch (route) {
        // case "/":
        //     loadContent("home");
        //     break;
        case "/css/how-to-use":
            loadContent("cssStilos");
            break;
        // case "/contact":
        //     loadContent("");
        //     break;
        default:
            app2.innerHTML = "<h2>404 - Página no encontrada 3</h2>";
    }
};

// Escucha cambios en el hash
window.addEventListener("hashchange", router);
window.addEventListener("load", router);