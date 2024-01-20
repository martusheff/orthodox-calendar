import { loadStyleSetting } from "./OCPreferencesHelper";


export function getBorderRadius() {
    const isModern = loadStyleSetting();

    return isModern ? 12 : 0
}