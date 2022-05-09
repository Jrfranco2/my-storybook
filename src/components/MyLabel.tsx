import "./mylabel.css";

export interface MyLabelProps {
  /** Este es el mensaje a mostrar en la etiqueta */
  label: string;
  /** Este es el tamaño de la etiqueta */
  size: "normal" | "h1" | "h2" | "h3";
  /** Capitalizar la palabra */
  allCaps?: boolean;
  /**color */
  color?: "primary" | "secondary" | "tertiary";
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
}: MyLabelProps) => {
  return (
    <span className={`label ${size} ${allCaps && "capitalize"} text-${color}`}>
      {label}
    </span>
  );
};
