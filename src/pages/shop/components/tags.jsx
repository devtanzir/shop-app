import { tags } from "../../../components/constants/tags";
import DefaultTitle from "./default-title";

const Tags = () => {
  return (
    <div>
      <DefaultTitle title="POPULAR TAGS" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="px-5 py-3 flex items-center border border-black text-[11px] text-[#666] hover:bg-primary hover:text-white transition-colors tracking-wide hover:border-primary"
          >
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tags;
