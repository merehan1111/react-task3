export default function Skill(props) {
  return (
    <>
      <div>
        <label htmlFor="file">{props.name}</label>
        <progress id="file" value={props.value} max='100'> </progress>
      </div>
    </>
  );
}
