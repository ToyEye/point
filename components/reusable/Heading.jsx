const Heading = ({ text, className, tag }) => {
  const Tag = tag || "h2";

  return <Tag className={className}>{text}</Tag>;
};

export default Heading;
