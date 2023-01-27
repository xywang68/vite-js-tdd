import viteLogo from './vite.svg'
import javascriptLogo from './javascript.svg'

export function showApp(element) {
    element.classList.add("app");
    element.innerHTML = `
        <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src="${viteLogo}" class="logo vanilla" alt="Vite logo" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>
            <h1>Hello Vite! and JS!</h1>
            <div class="card">
            <button id="counter" type="button"></button>
            </div>
            <p class="read-the-docs">
            Click on the Vite logo to learn more...
            </p>
        </div>
    `
}