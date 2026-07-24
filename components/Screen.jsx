import { CardLemonadSelectMenu } from './CardLemonadSelectMenu.jsx';
import { CardLemonade } from './CardLemonade.jsx';
import { Chip } from './Chip.jsx';
import { Icons } from './Icons.jsx';

// figma node: 33:382 Каталог вкусов
export function Screen(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 393,
      height: 1731,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      position: "relative",
      color: "rgb(57,56,56)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: -79,
        top: -92,
        width: 551,
        height: 735,
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0.00%, rgba(0,0,0,0) 48.22%, rgba(0,0,0,0.5) 100.00%)",
      }} />
      <svg width={223} height={279} viewBox="0 0 223 279" fill="none" style={{
        position: "absolute",
        left: -6504.57,
        top: -4028,
        width: 223,
        height: 279,
        overflow: "hidden",
        borderRadius: 24,
      }}>
        <path d={"M 0 24 C 0 10.745 10.745 0 24 0 L 199 0 C 212.255 0 223 10.745 223 24 L 223 255 C 223 268.255 212.255 279 199 279 L 24 279 C 10.745 279 0 268.255 0 255 L 0 24 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "absolute",
        left: 16,
        top: 389,
        width: 361,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 1.149999976158142,
            letterSpacing: "-0.020em",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Новое жгучее сочетание</span>
          <span style={{
            position: "relative",
            fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.4500000476837158,
            letterSpacing: "-0.010em",
            color: "rgb(255,255,255)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Микс сладкого манго и жгучего чили для любителей необычных сочетаний</span>
        </div>
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 12,
          backgroundColor: "rgb(255,255,255)",
          display: "flex",
          flexDirection: "row",
          padding: "16px 24px 16px 24px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: 1.4500000476837158,
            letterSpacing: "-0.010em",
            color: "rgb(57,56,56)",
            flexShrink: 0,
          }}>Найди рядом</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: -30,
        top: 635,
        width: 452,
        height: 148,
        background: "linear-gradient(180deg, rgb(104,97,93) 0.00%, rgb(255,255,255) 100.00%)",
      }} />
      <div style={{
        position: "absolute",
        left: 0,
        top: 625,
        width: 393,
        height: 1008,
        borderRadius: 32,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: "28px 16px 28px 16px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 600,
          fontSize: 24,
          lineHeight: 1.2000000476837158,
          letterSpacing: "-0.020em",
          color: "rgb(57,56,56)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>Попробуйте больше вкусов</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <Chip
                  style={{ position: "relative", width: 112, flexShrink: 0 }}
                  text1={"Классика"}
                  state={"selected"}
                />
                <Chip
                  style={{ position: "relative", width: 82, flexShrink: 0 }}
                  text1={"Ретро"}
                  state={"default"}
                />
                <Chip
                  style={{ position: "relative", width: 156, flexShrink: 0 }}
                  text1={"Коллаборации"}
                  state={"default"}
                />
                <Chip
                  style={{ position: "relative", width: 74, flexShrink: 0 }}
                  text1={"Вода"}
                  state={"default"}
                />
              </div>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            flexWrap: "wrap",
            alignContent: "space-between",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div className="fig-asset-8d6896b99f65de18-f6e9f162" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(6px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>Физзи рислинг</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <CardLemonade
              style={{
                position: "relative",
                width: 176.5,
                height: 212,
                flexShrink: 0,
              }}
              text1={"Персик + Вербена"}
            />
            <div className="fig-asset-4a654e379531f4f9-11cd6f99" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(6px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                whiteSpace: "pre-wrap",
              }}>{"Манго +\nЧили"}</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="fig-asset-6f6539dd7dc19c26-d655765f" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(6px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>Арбуз + Мелисса</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="fig-asset-9fca5c57cac06b74-7f10a38d" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(6px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>Ананас + Личи</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="fig-asset-a7f150cbcead2419-336502ea" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(6px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
              }}>Дыня +  Мята</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="fig-asset-93660e1d90478d4a-6e989b76" style={{
              position: "relative",
              width: 176.5,
              height: 212,
              overflow: "hidden",
              borderRadius: 16,
              display: "flex",
              flexDirection: "row",
              padding: "12px 12px 12px 12px",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                position: "absolute",
                left: -5,
                top: 141,
                width: 186,
                height: 141,
                backgroundColor: "rgba(237,237,237,0.08)",
                backdropFilter: "blur(1px)",
              }} />
              <span style={{
                position: "relative",
                width: 124,
                fontFamily: "Montserrat, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.2000000476837158,
                letterSpacing: "-0.010em",
                color: "rgb(255,255,255)",
                flexShrink: 0,
                whiteSpace: "pre-wrap",
              }}>{"Физзи \nрозе"}</span>
              <div style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 32,
                backgroundColor: "rgb(255,255,255)",
                display: "flex",
                flexDirection: "row",
                gap: 4,
                padding: "8px 8px 8px 8px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "relative",
                  width: 20,
                  height: 20,
                  overflow: "hidden",
                  flexShrink: 0,
                }}>
                  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" style={{
                    position: "absolute",
                    left: 2.5,
                    top: 2.5,
                    width: 15,
                    height: 15,
                    color: "rgb(254,121,98)",
                  }}>
                    <path d={"M 0.658 14.781 L 0.461 14.188 L 0.46 14.188 L 0.658 14.781 Z M 0 14.306 L 0.625 14.307 L 0.625 14.306 L 0 14.306 Z M 0 2.027 L -0.625 2.027 L -0.625 2.027 L 0 2.027 Z M 0.342 1.553 L 0.144 0.96 L 0.144 0.96 L 0.342 1.553 Z M 5 0 L 5.198 -0.593 C 5.069 -0.636 4.931 -0.636 4.802 -0.593 L 5 0 Z M 10 15 L 9.802 15.593 C 9.931 15.636 10.069 15.636 10.198 15.593 L 10 15 Z M 14.658 13.447 L 14.856 14.04 L 14.856 14.04 L 14.658 13.447 Z M 15 12.972 L 14.375 12.972 L 14.375 12.973 L 15 12.972 Z M 15 0.693 L 15.625 0.693 L 15.625 0.693 L 15 0.693 Z M 14.342 0.219 L 14.539 0.812 L 14.54 0.812 L 14.342 0.219 Z M 5 13.333 L 4.802 12.74 L 0.461 14.188 L 0.658 14.781 L 0.856 15.374 L 5.198 13.926 L 5 13.333 Z M 0.658 14.781 L 0.46 14.188 C 0.479 14.182 0.499 14.18 0.519 14.183 L 0.425 14.801 L 0.33 15.419 C 0.507 15.446 0.687 15.43 0.856 15.374 L 0.658 14.781 Z M 0.425 14.801 L 0.519 14.183 C 0.538 14.186 0.557 14.194 0.573 14.205 L 0.207 14.712 L -0.158 15.219 C -0.014 15.323 0.154 15.392 0.33 15.419 L 0.425 14.801 Z M 0.207 14.712 L 0.573 14.205 C 0.589 14.217 0.602 14.232 0.611 14.25 L 0.055 14.534 L -0.502 14.818 C -0.421 14.977 -0.303 15.114 -0.158 15.219 L 0.207 14.712 Z M 0.055 14.534 L 0.611 14.25 C 0.62 14.267 0.625 14.287 0.625 14.307 L 0 14.306 L -0.625 14.305 C -0.625 14.483 -0.583 14.659 -0.502 14.818 L 0.055 14.534 Z M 0 14.306 L 0.625 14.306 L 0.625 2.027 L 0 2.027 L -0.625 2.027 L -0.625 14.306 L 0 14.306 Z M 0 2.027 L 0.625 2.028 C 0.625 2.054 0.617 2.079 0.601 2.101 L 0.094 1.735 L -0.413 1.37 C -0.551 1.561 -0.625 1.791 -0.625 2.027 L 0 2.027 Z M 0.094 1.735 L 0.601 2.101 C 0.586 2.122 0.564 2.138 0.54 2.146 L 0.342 1.553 L 0.144 0.96 C -0.08 1.035 -0.275 1.178 -0.413 1.37 L 0.094 1.735 Z M 0.342 1.553 L 0.539 2.146 L 5.198 0.593 L 5 0 L 4.802 -0.593 L 0.144 0.96 L 0.342 1.553 Z M 5 13.333 L 4.802 13.926 L 9.802 15.593 L 10 15 L 10.198 14.407 L 5.198 12.74 L 5 13.333 Z M 5 13.333 L 5.625 13.333 L 5.625 0 L 5 0 L 4.375 0 L 4.375 13.333 L 5 13.333 Z M 10 15 L 10.198 15.593 L 14.856 14.04 L 14.658 13.447 L 14.461 12.855 L 9.802 14.407 L 10 15 Z M 14.658 13.447 L 14.856 14.04 C 15.08 13.966 15.275 13.822 15.413 13.63 L 14.906 13.265 L 14.399 12.9 C 14.414 12.879 14.436 12.863 14.46 12.855 L 14.658 13.447 Z M 14.906 13.265 L 15.413 13.63 C 15.551 13.438 15.625 13.208 15.625 12.972 L 15 12.972 L 14.375 12.973 C 14.375 12.947 14.383 12.922 14.399 12.9 L 14.906 13.265 Z M 15 12.972 L 15.625 12.972 L 15.625 0.693 L 15 0.693 L 14.375 0.693 L 14.375 12.972 L 15 12.972 Z M 15 0.693 L 15.625 0.693 C 15.625 0.515 15.583 0.339 15.501 0.181 L 14.945 0.465 L 14.389 0.75 C 14.38 0.733 14.375 0.713 14.375 0.693 L 15 0.693 Z M 14.945 0.465 L 15.501 0.181 C 15.42 0.022 15.302 -0.115 15.157 -0.219 L 14.792 0.288 L 14.427 0.795 C 14.411 0.783 14.398 0.768 14.389 0.75 L 14.945 0.465 Z M 14.792 0.288 L 15.157 -0.219 C 15.013 -0.324 14.845 -0.392 14.669 -0.419 L 14.575 0.199 L 14.481 0.817 C 14.462 0.814 14.443 0.806 14.427 0.795 L 14.792 0.288 Z M 14.575 0.199 L 14.669 -0.419 C 14.493 -0.446 14.313 -0.43 14.144 -0.374 L 14.342 0.219 L 14.54 0.812 C 14.521 0.818 14.501 0.82 14.481 0.817 L 14.575 0.199 Z M 14.342 0.219 L 14.144 -0.374 L 9.802 1.074 L 10 1.667 L 10.198 2.26 L 14.539 0.812 L 14.342 0.219 Z M 10 15 L 10.625 15 L 10.625 1.667 L 10 1.667 L 9.375 1.667 L 9.375 15 L 10 15 Z M 10 1.667 L 10.198 1.074 L 5.198 -0.593 L 5 0 L 4.802 0.593 L 9.802 2.26 L 10 1.667 Z"} fill="currentColor" fillRule="nonzero" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 16,
        top: 16,
        overflow: "hidden",
        borderRadius: 1000,
        backgroundColor: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(130px)",
        display: "flex",
        flexDirection: "row",
        gap: 4,
        padding: "4px 4px 4px 4px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          transform: "matrix(-1,0,0,1,0,0)",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={7.503} height={13.615} viewBox="0 0 7.503 13.615" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(-1,0,0,1,16,5)",
            transformOrigin: "0 0",
            width: 7.503,
            height: 13.615,
          }}>
            <path d={"M 1.956 6.812 L 7.233 12.089 C 7.413 12.269 7.5 12.478 7.494 12.717 C 7.488 12.957 7.395 13.166 7.215 13.345 C 7.035 13.525 6.826 13.615 6.587 13.615 C 6.348 13.615 6.139 13.525 5.959 13.345 L 0.431 7.835 C 0.287 7.692 0.179 7.53 0.108 7.351 C 0.036 7.171 0 6.992 0 6.812 C 0 6.633 0.036 6.453 0.108 6.274 C 0.179 6.094 0.287 5.933 0.431 5.789 L 5.959 0.261 C 6.138 0.081 6.351 -0.005 6.597 0 C 6.842 0.006 7.054 0.099 7.233 0.279 C 7.412 0.459 7.502 0.668 7.503 0.907 C 7.503 1.146 7.413 1.355 7.233 1.535 L 1.956 6.812 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <CardLemonadSelectMenu
        style={{
          position: "absolute",
          left: 30,
          top: 1639,
          width: 333,
        }}
        icon1={<Icons name={"home"} state={"active"} style={{ width: "100%", height: "100%" }} />}
      />
    </div>
  );
}
export default Screen;
