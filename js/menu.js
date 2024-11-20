function createGameMenu(startCallback, optionsCallback, exitCallback) {
    // Crear el contenedor del menú
    const menu = document.createElement('div');
    menu.id = 'menu';
    menu.style.cssText = `
        backdrop-filter: blur(8px);
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: opacity 0.5s;
    `;

    // Crear el título
    const title = document.createElement('h1');
    title.textContent = 'Menú Principal';
    title.style.cssText = 'font-size: 32px; margin-bottom: 20px;';
    menu.appendChild(title);

    // Crear botón de iniciar
    const startButton = document.createElement('button');
    startButton.textContent = 'Iniciar Juego';
    startButton.style.cssText = buttonStyle();
    startButton.addEventListener('click', () => {
        menu.style.display = 'none'; // Ocultar el menú
        if (startCallback) startCallback(); // Llamar al callback de inicio
    });
    menu.appendChild(startButton);

    // Crear botón de opciones
    const optionsButton = document.createElement('button');
    optionsButton.textContent = 'Opciones';
    optionsButton.style.cssText = buttonStyle();
    optionsButton.addEventListener('click', () => {
        if (optionsCallback) optionsCallback(); // Llamar al callback de opciones
    });
    menu.appendChild(optionsButton);

    // Crear botón de salir
    const exitButton = document.createElement('button');
    exitButton.textContent = 'Salir';
    exitButton.style.cssText = buttonStyle();
    exitButton.addEventListener('click', () => {
        if (exitCallback) exitCallback(); // Llamar al callback de salir
    });
    menu.appendChild(exitButton);

    // Agregar el menú al documento
    document.body.appendChild(menu);

    // Estilo común para los botones
    function buttonStyle() {
        return `
            padding: 10px 20px;
            margin: 10px;
            font-size: 18px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #444;
            color: white;
            transition: background-color 0.3s;
        `;
    }

    // Función para mostrar el menú
    function showMenu() {
        menu.style.display = 'flex';
    }

    // Función para ocultar el menú
    function hideMenu() {
        menu.style.display = 'none';
    }

    // Devolver funciones de control del menú
    return { showMenu, hideMenu };
}