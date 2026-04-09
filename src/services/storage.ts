import type { Catch } from "../types/catch";


export function getCatches(): Catch[] {
    const catches = localStorage.getItem("catches");
    return catches ? JSON.parse(catches) : [];
}

export function saveCatch(newCatch: Catch) {
    const catches = getCatches();
    catches.push(newCatch);
    localStorage.setItem("catches", JSON.stringify(catches));
}