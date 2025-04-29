// NavigationService.js
let navigateFunction = null

export function setNavigate(navFunc) {
    navigateFunction = navFunc
}

export function youDied(path) {
    if (navigateFunction) {
        navigateFunction(path)
    } else {
        console.error("Navigation function not set")
    }
}
