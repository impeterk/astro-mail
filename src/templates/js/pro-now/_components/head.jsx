import config from "./config";

export default function Head({ children, title, preview }) {
  return (
    <mj-head>
      <mj-title>{title}</mj-title>
      <mj-title>{preview}</mj-title>
      <mj-attributes>
        <mj-text
          font-weight="400"
          font-size="16px"
          color={config.color}
          padding="0"
          line-height="1.25"
        ></mj-text>
        <mj-section padding="0px"></mj-section>
        <mj-wrapper padding="0px"></mj-wrapper>
        <mj-divider
          padding="10px 20px"
          border-width="2px"
          border-color="lightgrey"
        />
      </mj-attributes>
      {children}
    </mj-head>
  );
}
