const CategoryCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <img className="w-14" src={icon} alt="" />
      <p className=" md:text-2xl">{text}</p>
    </div>
  );
};

export default CategoryCard;
