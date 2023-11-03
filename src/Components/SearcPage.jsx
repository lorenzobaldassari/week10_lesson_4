import { useLocation, useParams } from "react-router-dom";
// import Section from "./Home-component/Section";
import SectionExtended from "./Home-component/SectionExtended";

const SearchPage = () => {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params.name);
  console.log(params);
  let a = params.name.split(` `);
  let b = a.join(`%20`);
  console.log(b);

  return <SectionExtended title={params.name} searchParameters={b} />;
// return <Section title="Harry Potter" searchParameters="Harry%20Potter" />
};

export default SearchPage;
