import ProjectInfo from "./ProjectInfo";
import Heading from "@/components/reusable/Heading";
import LinkLikeBtn from "@/components/reusable/LinkLikeBtn";

const Project = ({ title, data, slug }) => {
  return (
    <li>
      <Heading
        text={title}
        className="text-2xl text-center mb-8 font-bold leading-4 tracking-widest lg:text-4xl underline"
      />
      <ul className="flex flex-col gap-4 md:gap-6 lg:gap-10 mb-8">
        {data.map(({ name, desc, imageAlt, imageUrl }, index) => (
          <ProjectInfo
            key={name}
            name={name}
            desc={desc}
            imageAlt={imageAlt}
            imageUrl={imageUrl}
            index={index}
          />
        ))}
      </ul>
      <LinkLikeBtn
        text="View this ptoject"
        path={`/portfolio/${slug}`}
        classNames="w-3/4 md:w-1/3 "
        label={`Project page ${slug}`}
      />
    </li>
  );
};

export default Project;
