export const Main = ({ text = "default text" }) => {
  return (
    <mj-section>
      <mj-column>
        <mj-text font-family="helvetica">{text}</mj-text>
        <mj-text font-family="helvetica">
          Changing this does trigger rerender
        </mj-text>
      </mj-column>
    </mj-section>
  );
};
