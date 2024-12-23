const Heading = ({ heading, title }) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-2">
      <h2 className="text-3xl lg:text-5xl font-bold  ">{heading}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Heading;
