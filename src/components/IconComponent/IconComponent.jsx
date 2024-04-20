import icons from '../../images/icons.svg';

export const IconComponent = ({
  id,
  width,
  height,
  stroke,
  strokeWidth,
  fill,
}) => {
  return (
    <svg width={width} height={height}>
      <use
        href={icons + id}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      ></use>
    </svg>
  );
};
