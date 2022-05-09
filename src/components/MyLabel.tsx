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
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor,
  label = "No label",
  size = "normal",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} ${allCaps && "capitalize"} text-${color}`}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};
