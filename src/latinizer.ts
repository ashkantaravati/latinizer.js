export namespace Latinizer {
    let persianDigits: Array<string> = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    /**
     * Register
     */
    export function Register(selector: string, lang: string = "fa") {
        let element = document.querySelector(selector) as HTMLInputElement;
        setListener(element, lang);


    }
    export function ConvertFromPersian(keyCode: number): number {
        let newKeyCode = keyCode;
        if (keyCode >= 1776 && keyCode <= 1785) {
            newKeyCode = keyCode - 1728;
        }
        return newKeyCode;
    }
    export function setListener(element: HTMLInputElement, lang: string) {
        if (lang === "fa") {
            element.addEventListener("keydown", function (event: KeyboardEvent) {
                let pushedKeyCode = event.keyCode || event.which;
                let pushKeyRepresentation = event.key;
                if (persianDigits.indexOf(pushKeyRepresentation) !== -1) {

                    event.preventDefault();
                    element.value += String.fromCharCode(pushedKeyCode);

                }

            })

        }
    }
}