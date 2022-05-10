/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /** Este es el mensaje a mostrar en la etiqueta */
    label: string;
    /** Este es el tamaño de la etiqueta */
    size: "normal" | "h1" | "h2" | "h3";
    /** Capitalizar la palabra */
    allCaps?: boolean;
    /**Text color */
    color?: "primary" | "secondary" | "tertiary";
    /** Color personalizado de la fuente */
    fontColor?: string;
    /**Background color */
    backgroundColor?: string;
}
export declare const MyLabel: ({ allCaps, backgroundColor, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
