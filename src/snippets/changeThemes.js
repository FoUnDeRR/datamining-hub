import { findByProps } from "../util/utils.js";

const { ThemeTypes } = findByProps("ThemeTypes");

// THEME NAME:
// - DARK
// - LIGHT
// - MOONLIGHT
// - DARKER
const theme = "DARK";

findByProps("saveClientTheme").saveClientTheme({ theme: ThemeTypes[theme] });
