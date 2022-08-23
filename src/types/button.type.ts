export type buttonType = {
  styles: React.CSSProperties;
  children: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
