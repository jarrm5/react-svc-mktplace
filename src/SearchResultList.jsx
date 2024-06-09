const services = [
  {
    company: "Bob Hamilton Heating and Cooling",
    tags: ["heating", "cooling", "hvac"],
  },
  {
    company: "Eden Tree Service",
    tags: ["lawncare", "tree pruning"],
  },
];

export default function SearchResult(props) {
  const { search } = props;
  return (
    <ul>
      <li>{services.filter((obj) => obj.company.search(search) > 0)}</li>
    </ul>
  );
}
