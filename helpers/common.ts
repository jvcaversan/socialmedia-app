import { Dimensions } from "react-native";

// Obtenção da largura e altura do dispositivo
const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// Tipagem para a função que recebe um número (porcentagem) e retorna um número (altura calculada)
export const hp = (percentage: number): number => {
  return (percentage * deviceHeight) / 100;
};

// Tipagem para a função que recebe um número (porcentagem) e retorna um número (largura calculada)
export const wp = (percentage: number): number => {
  return (percentage * deviceWidth) / 100;
};
