interface SmallProps {
  value: number;
}

const Small: React.FC<SmallProps> = ({value}) => {

  console.log("%cRender Small", "color:red");

  return (
    <small style={{textAlign:"center", marginBottom:"10px"}}>{value}</small>
  );
}

export default Small;
