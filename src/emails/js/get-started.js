import mjml2html from "mjml"
import { main } from "../mjml/partials/main"
/*
  Compile an mjml string
*/

export const title = 'Get started with Astro & Mjml'
export const htmlOutput = mjml2html(
    `
  <mjml>
    <mj-body>
        <mj-section>
            <mj-column>
                <mj-image width="100px" src="https://mjml.io/assets/img/logo-small.png"></mj-image>
                <mj-divider border-color="#F45E43"></mj-divider>
                <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>
                <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello from a lovely world with HMR?
                </mj-text>
            </mj-column>
        </mj-section>
        <mj-include path="src/emails/mjml/partials/main.mjml" />
        <mj-text>This is lovely</mj-text>
        ${main}
    </mj-body>
</mjml>
`
).html;

export default htmlOutput
/*
  Print the responsive HTML generated and MJML errors if any
*/
