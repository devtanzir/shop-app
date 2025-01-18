import { Fragment } from "react";
import { categories } from "../../../components/constants/category";
import DefaultTitle from "./default-title";

const Category = () => {
  return (
    <>
      <DefaultTitle title="Categories" />
      <ul className="space-y-[11px]">
        {categories.map((category, index) => (
          <Fragment key={category.id}>
            <li>
              <a
                href="#"
                className="uppercase text-[13px] text-[#666] hover:text-primary tracking-wide border-b]"
              >
                {category.name}
              </a>
            </li>
            {index < categories.length - 1 && <hr className="my-2" />}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default Category;
