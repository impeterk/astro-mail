import {
  Button,
  Calculations,
  ContactUs,
  CustomerDetails,
  Header,
  Items,
  OrderDetails,
  Stage,
} from "./_components/body";
import config from "./_components/config";
import { Footer } from "./_components/footer";
import Head from "./_components/head";
export const title = "Your order is on its way";
const preview =
  "Your Henkel Adhesives items are on the way. You can track your items by using the link below.";

export default function OrderShipped() {
  return (
    <mjml>
      <Head title={title} preview={preview}></Head>
      <mj-body background-color="#F8F8F8">
        <mj-wrapper background-color={config.backgroundColor}>
          <Header />
          <Stage title="Your order is on its way">
            <>
              <mj-text>
                <p>Dear {`{{Name Surname}}`}</p>
                <p>
                  Your Henkel Adhesives items are on the way. You can track your
                  items by using the link below.
                </p>
              </mj-text>
              <Button
                backgroundColor={config.stage.btn.background}
                color={config.stage.btn.color}
                href="{{link}}"
              >
                Track Your Order
              </Button>
            </>
          </Stage>
          <Items title="Shipped items" />
          <mj-section>
            <mj-spacer />
          </mj-section>
          <OrderDetails text="{{order_number}}" />
          <OrderDetails title="Order date" text="{{order_date}}" />
          <CustomerDetails
            lines={["Mr. John Doe", "Company name", "Phone #"]}
          />
          <CustomerDetails
            title="Fulfillment address"
            lines={[
              "Henkel Corporation",
              "7101 Logistics Dr,",
              "Louisville, KY 40258",
            ]}
          />
          <CustomerDetails
            title="Shipping address"
            lines={[
              "Mr. John Doe",
              "200 Elm Street",
              "Stamford 06902 - 3800",
              "United States",
            ]}
          />
          <Items title="Order summary" />
          <Items divider={false} />
          <Calculations />
          <ContactUs />
          <Footer />
        </mj-wrapper>
      </mj-body>
    </mjml>
  );
}