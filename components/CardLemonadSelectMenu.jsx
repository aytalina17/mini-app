import { Icons } from './Icons.jsx';

// figma node: 1:111 CardLemonadSelect/Menu
export function CardLemonadSelectMenu(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 333,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 14px 0px rgba(122,155,187,0.27)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icons name={"home"} state={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icons name={"map"} state={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 60,
        overflow: "hidden",
        borderRadius: 1000,
        backgroundColor: "rgb(254,121,98)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 17.5,
          top: 18,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Vector</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon3 ?? <Icons name={"task-square"} state={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        borderRadius: 1000,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "16px 16px 16px 16px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon4 ?? <Icons name={"user"} state={"default"} />}</div>
      </div>
    </div>
  );
}
export default CardLemonadSelectMenu;
