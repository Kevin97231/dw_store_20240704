/* eslint-disable react/prop-types */
export const Title = ({ children }) => {
  return (
    <div className="w-full">
      <div className="lg:w-1/6 font-semibold border-b border-[#021431] my-5 inline-block flex-grow-1">
        {children}
      </div>
    </div>
  );
};
