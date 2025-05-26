interface Props {
  isPacked: boolean;
  name: string;
}

function Item(props: Props) {
  if (props.isPacked) {
    return <li>{props.name} ✅</li>;
  }
  return <li>{props.name}</li>;
}

function PackingList12() {
  return (
    <section>
      <h2>Packing List</h2>
      <ul>
        <li>
          <Item isPacked={true} name="주방용품" />
          <Item isPacked={false} name="거실용품" />
          <Item isPacked={true} name="안방용품" />
        </li>
      </ul>
    </section>
  );
}
export default PackingList12;
