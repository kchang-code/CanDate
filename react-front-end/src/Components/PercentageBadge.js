import Badge from "react-bootstrap/Badge";

export function PercentageBadge(props) {
  const { matchPercentage } = props;

  return (
    <div>
      {matchPercentage.map((item) => {
        // {console.log("item", item)}
        return <Badge variant="light">1</Badge>;
      })}
    </div>
  );
}
