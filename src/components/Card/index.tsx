import '../../styles/card.css';

export enum CardSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export type CardProps = {
  size: CardSize,
  elevation: number,
  children?: JSX.Element | JSX.Element[]
}

const cardStyle = (size: CardSize, elevation: number): React.CSSProperties => {
  let sizeNumber = 30;
  switch(size) {

  }
  const result: React.CSSProperties = {}

  return result;
}

export function Card({ size, elevation, children }: CardProps) {
  return (
    <div className='card' style={cardStyle(size, elevation)}>
      { children }
    </div>
  );
}