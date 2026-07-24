// figma node: 33:334 Chip (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "state=" + __venc(p.state);

export function Chip(_p = {}) {
  const props = { ..._p, state: _p.state ?? "selected" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgb(254,121,98)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.4500000476837158,
        letterSpacing: "-0.010em",
        color: "rgb(255,255,255)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Все"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: 1.2999999523162842,
        letterSpacing: "-0.010em",
        color: "rgb(57,56,56)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Все"}</span>
    </div>
  );
  const __impls = {
    // figma: State=Selected
    "state=selected": __body0,
    // figma: State=Default
    "state=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Chip;
