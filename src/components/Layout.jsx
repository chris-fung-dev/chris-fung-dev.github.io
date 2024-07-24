export default function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <div>Logo</div>
      <div>{children}</div>
      <div>Made by Christopher Fung 2024</div>
    </div>
  );
}
