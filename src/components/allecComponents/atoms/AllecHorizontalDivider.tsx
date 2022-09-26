const AllecHorizontalDivider = ({variant = `light`, spacing = `medium`}) => {
  return (
    <div
      className={[
        `w-full`,
        `h-px`,
        variant === `light` ? `bg-white` : 'bg-black',
        spacing === `large`
          ? `my-bl-0.75`
          : spacing === `small`
          ? `my-bl-0.25`
          : `my-bl-0.5`,
      ].join(` `)}
    ></div>
  );
};

export default AllecHorizontalDivider;
