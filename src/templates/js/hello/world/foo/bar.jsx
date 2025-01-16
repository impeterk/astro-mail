export const title = "Get started with Astro & Mjml";

// We can write JSX components that returns mjml syntax
// Templates should be retured as default export
export default function Template() {
  return (
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-image
              width="100px"
              src="https://mjml.io/assets/img/logo-small.png"
            ></mj-image>
            <mj-divider border-color="#F45E43"></mj-divider>
            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
              Hello World yes
            </mj-text>
            <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
              Hello from a lovely world with HMR?
            </mj-text>
          </mj-column>
        </mj-section>
        {/* <mj-include path="src/emails/mjml/partials/main.mjml" />  */}
        <mj-msobutton
          font-family="Helvetica"
          background-color="#f45e43"
          color="white"
          border-radius="0.25rem"
        >
          Yo, my maan
        </mj-msobutton>
      </mj-body>
    </mjml>
  );
}
