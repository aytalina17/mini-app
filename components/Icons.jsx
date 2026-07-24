// figma node: 1:60 icons (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "name=" + __venc(p.name) + '|' + "state=" + __venc(p.state);

export function Icons(_p = {}) {
  const props = { ..._p, name: _p.name ?? "user", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={8.880} height={8.870} viewBox="0 0 8.880 8.870" fill="none" style={{
            position: "absolute",
            left: 7.559,
            top: 2,
            width: 8.88,
            height: 8.87,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 4.6 8.87 L 4.525 9.616 C 4.559 9.62 4.592 9.621 4.625 9.62 L 4.6 8.87 Z M 4.27 8.87 L 4.245 9.62 C 4.276 9.621 4.307 9.62 4.338 9.617 L 4.27 8.87 Z M 8.88 4.44 L 9.63 4.443 L 9.63 4.44 L 8.88 4.44 Z M 4.6 8.87 L 4.675 8.124 C 4.523 8.109 4.355 8.109 4.202 8.123 L 4.27 8.87 L 4.338 9.617 C 4.405 9.611 4.477 9.611 4.525 9.616 L 4.6 8.87 Z M 4.27 8.87 L 4.295 8.12 C 2.32 8.054 0.75 6.437 0.75 4.44 L 0 4.44 L -0.75 4.44 C -0.75 7.243 1.46 9.526 4.245 9.62 L 4.27 8.87 Z M 0 4.44 L 0.75 4.44 C 0.75 2.403 2.395 0.75 4.44 0.75 L 4.44 0 L 4.44 -0.75 C 1.565 -0.75 -0.75 1.577 -0.75 4.44 L 0 4.44 Z M 4.44 0 L 4.44 0.75 C 6.476 0.75 8.13 2.404 8.13 4.44 L 8.88 4.44 L 9.63 4.44 C 9.63 1.576 7.304 -0.75 4.44 -0.75 L 4.44 0 Z M 8.88 4.44 L 8.13 4.437 C 8.122 6.436 6.549 8.054 4.575 8.12 L 4.6 8.87 L 4.625 9.62 C 7.411 9.526 9.618 7.244 9.63 4.443 L 8.88 4.44 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={13.640} height={8.622} viewBox="0 0 13.640 8.622" fill="none" style={{
            position: "absolute",
            left: 5.344,
            top: 13.188,
            width: 13.64,
            height: 8.622,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 1.815 1.373 L 1.401 0.747 L 1.398 0.749 L 1.815 1.373 Z M 1.815 7.242 L 2.232 6.619 L 2.23 6.618 L 1.815 7.242 Z M 11.825 7.242 L 12.242 7.866 L 12.242 7.866 L 11.825 7.242 Z M 11.825 1.373 L 11.408 1.996 L 11.41 1.997 L 11.825 1.373 Z M 1.815 1.373 L 1.398 0.749 C 0.032 1.663 -0.75 2.94 -0.75 4.311 C -0.75 5.683 0.033 6.958 1.4 7.867 L 1.815 7.242 L 2.23 6.618 C 1.177 5.917 0.75 5.067 0.75 4.311 C 0.75 3.555 1.178 2.702 2.232 1.996 L 1.815 1.373 Z M 1.815 7.242 L 1.398 7.866 C 2.922 8.886 4.891 9.372 6.82 9.372 C 8.749 9.372 10.718 8.886 12.242 7.866 L 11.825 7.242 L 11.408 6.619 C 10.182 7.439 8.521 7.872 6.82 7.872 C 5.119 7.872 3.458 7.439 2.232 6.619 L 1.815 7.242 Z M 11.825 7.242 L 12.242 7.866 C 13.608 6.952 14.39 5.675 14.39 4.304 C 14.39 2.932 13.607 1.657 12.24 0.748 L 11.825 1.373 L 11.41 1.997 C 12.463 2.698 12.89 3.548 12.89 4.304 C 12.89 5.06 12.462 5.913 11.408 6.619 L 11.825 7.242 Z M 11.825 1.373 L 12.242 0.749 C 10.722 -0.266 8.756 -0.75 6.828 -0.75 C 4.899 -0.75 2.929 -0.266 1.401 0.747 L 1.815 1.373 L 2.229 1.998 C 3.461 1.181 5.126 0.75 6.828 0.75 C 8.529 0.75 10.188 1.181 11.408 1.996 L 11.825 1.373 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={9.500} height={9.490} viewBox="0 0 9.500 9.490" fill="none" style={{
            position: "absolute",
            left: 7.25,
            top: 2,
            width: 9.5,
            height: 9.49,
            color: "rgb(57,56,56)",
          }}>
            <path d={"M 4.75 0 C 2.13 0 0 2.13 0 4.75 C 0 7.32 2.01 9.4 4.63 9.49 C 4.71 9.48 4.79 9.48 4.85 9.49 C 4.87 9.49 4.88 9.49 4.9 9.49 C 4.91 9.49 4.91 9.49 4.92 9.49 C 7.48 9.4 9.49 7.32 9.5 4.75 C 9.5 2.13 7.37 0 4.75 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.080} height={9.245} viewBox="0 0 14.080 9.245" fill="none" style={{
            position: "absolute",
            left: 4.961,
            top: 12.758,
            width: 14.08,
            height: 9.245,
            color: "rgb(57,56,56)",
          }}>
            <path d={"M 12.12 1.395 C 9.33 -0.465 4.78 -0.465 1.97 1.395 C 0.7 2.245 0 3.395 0 4.625 C 0 5.855 0.7 6.995 1.96 7.835 C 3.36 8.775 5.2 9.245 7.04 9.245 C 8.88 9.245 10.72 8.775 12.12 7.835 C 13.38 6.985 14.08 5.845 14.08 4.605 C 14.07 3.375 13.38 2.235 12.12 1.395 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={5.250} height={1.500} viewBox="0 -0.750 5.250 1.500" fill="none" style={{
            position: "absolute",
            left: 12.371,
            top: 8.883,
            width: 5.25,
            height: 1.5,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 5.25 0.75 C 5.664 0.75 6 0.414 6 0 C 6 -0.414 5.664 -0.75 5.25 -0.75 L 5.25 0 L 5.25 0.75 Z M 0 0 L 0 0.75 L 5.25 0.75 L 5.25 0 L 5.25 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3} height={2.250} viewBox="0 0 3 2.250" fill="none" style={{
            position: "absolute",
            left: 6.379,
            top: 7.383,
            width: 3,
            height: 2.25,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 0.53 0.97 C 0.237 0.677 -0.237 0.677 -0.53 0.97 C -0.823 1.263 -0.823 1.737 -0.53 2.03 L 0 1.5 L 0.53 0.97 Z M 0.75 2.25 L 0.22 2.78 C 0.513 3.073 0.987 3.073 1.28 2.78 L 0.75 2.25 Z M 3.53 0.53 C 3.823 0.237 3.823 -0.237 3.53 -0.53 C 3.237 -0.823 2.763 -0.823 2.47 -0.53 L 3 0 L 3.53 0.53 Z M 0 1.5 L -0.53 2.03 L 0.22 2.78 L 0.75 2.25 L 1.28 1.72 L 0.53 0.97 L 0 1.5 Z M 0.75 2.25 L 1.28 2.78 L 3.53 0.53 L 3 0 L 2.47 -0.53 L 0.22 1.72 L 0.75 2.25 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={5.250} height={1.500} viewBox="0 -0.750 5.250 1.500" fill="none" style={{
            position: "absolute",
            left: 12.371,
            top: 15.883,
            width: 5.25,
            height: 1.5,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 C -0.75 0.414 -0.414 0.75 0 0.75 L 0 0 L 0 -0.75 Z M 5.25 0.75 C 5.664 0.75 6 0.414 6 0 C 6 -0.414 5.664 -0.75 5.25 -0.75 L 5.25 0 L 5.25 0.75 Z M 0 0 L 0 0.75 L 5.25 0.75 L 5.25 0 L 5.25 -0.75 L 0 -0.75 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={3} height={2.250} viewBox="0 0 3 2.250" fill="none" style={{
            position: "absolute",
            left: 6.379,
            top: 14.383,
            width: 3,
            height: 2.25,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 0.53 0.97 C 0.237 0.677 -0.237 0.677 -0.53 0.97 C -0.823 1.263 -0.823 1.737 -0.53 2.03 L 0 1.5 L 0.53 0.97 Z M 0.75 2.25 L 0.22 2.78 C 0.513 3.073 0.987 3.073 1.28 2.78 L 0.75 2.25 Z M 3.53 0.53 C 3.823 0.237 3.823 -0.237 3.53 -0.53 C 3.237 -0.823 2.763 -0.823 2.47 -0.53 L 3 0 L 3.53 0.53 Z M 0 1.5 L -0.53 2.03 L 0.22 2.78 L 0.75 2.25 L 1.28 1.72 L 0.53 0.97 L 0 1.5 Z M 0.75 2.25 L 1.28 2.78 L 3.53 0.53 L 3 0 L 2.47 -0.53 L 0.22 1.72 L 0.75 2.25 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 7 20 L 7 20.75 L 13 20.75 L 13 20 L 13 19.25 L 7 19.25 L 7 20 Z M 13 20 L 13 20.75 C 15.574 20.75 17.571 20.24 18.905 18.905 C 20.24 17.571 20.75 15.574 20.75 13 L 20 13 L 19.25 13 C 19.25 15.426 18.76 16.929 17.845 17.845 C 16.929 18.76 15.426 19.25 13 19.25 L 13 20 Z M 20 13 L 20.75 13 L 20.75 7 L 20 7 L 19.25 7 L 19.25 13 L 20 13 Z M 20 7 L 20.75 7 C 20.75 4.426 20.24 2.429 18.905 1.095 C 17.571 -0.24 15.574 -0.75 13 -0.75 L 13 0 L 13 0.75 C 15.426 0.75 16.929 1.24 17.845 2.155 C 18.76 3.071 19.25 4.574 19.25 7 L 20 7 Z M 13 0 L 13 -0.75 L 7 -0.75 L 7 0 L 7 0.75 L 13 0.75 L 13 0 Z M 7 0 L 7 -0.75 C 4.426 -0.75 2.429 -0.24 1.095 1.095 C -0.24 2.429 -0.75 4.426 -0.75 7 L 0 7 L 0.75 7 C 0.75 4.574 1.24 3.071 2.155 2.155 C 3.071 1.24 4.574 0.75 7 0.75 L 7 0 Z M 0 7 L -0.75 7 L -0.75 13 L 0 13 L 0.75 13 L 0.75 7 L 0 7 Z M 0 13 L -0.75 13 C -0.75 15.574 -0.24 17.571 1.095 18.905 C 2.429 20.24 4.426 20.75 7 20.75 L 7 20 L 7 19.25 C 4.574 19.25 3.071 18.76 2.155 17.845 C 1.24 16.929 0.75 15.426 0.75 13 L 0 13 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(57,56,56)",
          }}>
            <path d={"M 14.19 0 L 5.81 0 C 2.17 0 0 2.17 0 5.81 L 0 14.19 C 0 17.83 2.17 20 5.81 20 L 14.19 20 C 17.83 20 20 17.83 20 14.19 L 20 5.81 C 20 2.17 17.83 0 14.19 0 Z M 7.97 12.9 L 5.72 15.15 C 5.57 15.3 5.38 15.37 5.19 15.37 C 5 15.37 4.8 15.3 4.66 15.15 L 3.91 14.4 C 3.61 14.11 3.61 13.63 3.91 13.34 C 4.2 13.05 4.67 13.05 4.97 13.34 L 5.19 13.56 L 6.91 11.84 C 7.2 11.55 7.67 11.55 7.97 11.84 C 8.26 12.13 8.26 12.61 7.97 12.9 Z M 7.97 5.9 L 5.72 8.15 C 5.57 8.3 5.38 8.37 5.19 8.37 C 5 8.37 4.8 8.3 4.66 8.15 L 3.91 7.4 C 3.61 7.11 3.61 6.63 3.91 6.34 C 4.2 6.05 4.67 6.05 4.97 6.34 L 5.19 6.56 L 6.91 4.84 C 7.2 4.55 7.67 4.55 7.97 4.84 C 8.26 5.13 8.26 5.61 7.97 5.9 Z M 15.56 14.62 L 10.31 14.62 C 9.9 14.62 9.56 14.28 9.56 13.87 C 9.56 13.46 9.9 13.12 10.31 13.12 L 15.56 13.12 C 15.98 13.12 16.31 13.46 16.31 13.87 C 16.31 14.28 15.98 14.62 15.56 14.62 Z M 15.56 7.62 L 10.31 7.62 C 9.9 7.62 9.56 7.28 9.56 6.87 C 9.56 6.46 9.9 6.12 10.31 6.12 L 15.56 6.12 C 15.98 6.12 16.31 6.46 16.31 6.87 C 16.31 7.28 15.98 7.62 15.56 7.62 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <svg width={19.710} height={17.334} viewBox="0 0 19.710 17.334" fill="none" style={{
          position: "absolute",
          left: 2.289,
          top: 3.336,
          width: 19.71,
          height: 17.334,
          color: "rgb(23,23,23)",
        }}>
          <path d={"M 2.99 15.912 L 2.618 15.261 L 2.617 15.261 L 2.99 15.912 Z M 5.34 14.572 L 4.969 13.92 L 4.968 13.921 L 5.34 14.572 Z M 7.23 14.522 L 6.89 15.19 L 6.894 15.193 L 7.23 14.522 Z M 12.48 17.152 L 12.144 17.823 L 12.15 17.825 L 12.48 17.152 Z M 14.37 17.102 L 14.741 17.754 L 14.743 17.753 L 14.37 17.102 Z M 18.7 14.622 L 19.073 15.273 L 19.077 15.27 L 18.7 14.622 Z M 16.72 1.412 L 17.092 2.064 L 17.093 2.063 L 16.72 1.412 Z M 14.37 2.752 L 14.741 3.404 L 14.742 3.404 L 14.37 2.752 Z M 12.48 2.802 L 12.82 2.134 L 12.815 2.131 L 12.48 2.802 Z M 7.23 0.182 L 7.565 -0.489 L 7.56 -0.491 L 7.23 0.182 Z M 5.34 0.232 L 4.969 -0.42 L 4.967 -0.419 L 5.34 0.232 Z M 1.01 2.712 L 1.382 3.363 L 1.383 3.363 L 1.01 2.712 Z M 0 4.442 L -0.75 4.442 L -0.75 14.172 L 0 14.172 L 0.75 14.172 L 0.75 4.442 L 0 4.442 Z M 0 14.172 L -0.75 14.172 C -0.75 15.284 -0.349 16.261 0.503 16.756 C 1.356 17.251 2.402 17.114 3.363 16.563 L 2.99 15.912 L 2.617 15.261 C 1.938 15.65 1.489 15.594 1.257 15.458 C 1.024 15.323 0.75 14.96 0.75 14.172 L 0 14.172 Z M 2.99 15.912 L 3.362 16.564 L 5.712 15.224 L 5.34 14.572 L 4.968 13.921 L 2.618 15.261 L 2.99 15.912 Z M 5.34 14.572 L 5.711 15.224 C 5.833 15.155 6.045 15.094 6.299 15.087 C 6.554 15.079 6.766 15.127 6.89 15.19 L 7.23 14.522 L 7.57 13.854 C 7.164 13.647 6.686 13.575 6.256 13.587 C 5.825 13.6 5.357 13.7 4.969 13.92 L 5.34 14.572 Z M 7.23 14.522 L 6.894 15.193 L 12.144 17.823 L 12.48 17.152 L 12.816 16.482 L 7.566 13.852 L 7.23 14.522 Z M 12.48 17.152 L 12.15 17.825 C 12.55 18.022 13.023 18.094 13.452 18.083 C 13.88 18.072 14.35 17.976 14.741 17.754 L 14.37 17.102 L 13.999 16.45 C 13.88 16.518 13.67 16.577 13.413 16.584 C 13.157 16.59 12.94 16.542 12.81 16.479 L 12.48 17.152 Z M 14.37 17.102 L 14.743 17.753 L 19.073 15.273 L 18.7 14.622 L 18.327 13.971 L 13.997 16.451 L 14.37 17.102 Z M 18.7 14.622 L 19.077 15.27 C 19.491 15.03 19.827 14.647 20.059 14.25 C 20.291 13.853 20.46 13.368 20.46 12.882 L 19.71 12.882 L 18.96 12.882 C 18.96 13.036 18.899 13.261 18.763 13.494 C 18.628 13.727 18.459 13.894 18.323 13.974 L 18.7 14.622 Z M 19.71 12.882 L 20.46 12.882 L 20.46 3.152 L 19.71 3.152 L 18.96 3.152 L 18.96 12.882 L 19.71 12.882 Z M 19.71 3.152 L 20.46 3.152 C 20.46 2.04 20.059 1.063 19.207 0.568 C 18.354 0.074 17.308 0.21 16.347 0.761 L 16.72 1.412 L 17.093 2.063 C 17.772 1.674 18.221 1.731 18.453 1.866 C 18.686 2.001 18.96 2.364 18.96 3.152 L 19.71 3.152 Z M 16.72 1.412 L 16.348 0.761 L 13.998 2.101 L 14.37 2.752 L 14.742 3.404 L 17.092 2.064 L 16.72 1.412 Z M 14.37 2.752 L 13.999 2.1 C 13.877 2.17 13.665 2.23 13.411 2.237 C 13.156 2.245 12.944 2.197 12.82 2.134 L 12.48 2.802 L 12.14 3.47 C 12.546 3.677 13.024 3.749 13.454 3.737 C 13.885 3.724 14.353 3.625 14.741 3.404 L 14.37 2.752 Z M 12.48 2.802 L 12.815 2.131 L 7.565 -0.489 L 7.23 0.182 L 6.895 0.853 L 12.145 3.473 L 12.48 2.802 Z M 7.23 0.182 L 7.56 -0.491 C 7.16 -0.688 6.687 -0.76 6.258 -0.749 C 5.83 -0.738 5.36 -0.642 4.969 -0.42 L 5.34 0.232 L 5.711 0.884 C 5.83 0.816 6.04 0.757 6.297 0.751 C 6.553 0.744 6.77 0.792 6.9 0.855 L 7.23 0.182 Z M 5.34 0.232 L 4.967 -0.419 L 0.637 2.061 L 1.01 2.712 L 1.383 3.363 L 5.713 0.883 L 5.34 0.232 Z M 1.01 2.712 L 0.638 2.061 C 0.216 2.302 -0.122 2.686 -0.353 3.084 C -0.584 3.481 -0.75 3.962 -0.75 4.442 L 0 4.442 L 0.75 4.442 C 0.75 4.292 0.809 4.069 0.943 3.838 C 1.077 3.608 1.244 3.442 1.382 3.363 L 1.01 2.712 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={1.500} height={13} viewBox="-0.750 0 1.500 13" fill="none" style={{
          position: "absolute",
          left: 8.559,
          top: 4,
          width: 1.5,
          height: 13,
          color: "rgb(23,23,23)",
        }}>
          <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0 0 L 0.75 0 Z M -0.75 13 C -0.75 13.414 -0.414 13.75 0 13.75 C 0.414 13.75 0.75 13.414 0.75 13 L 0 13 L -0.75 13 Z M 0 0 L -0.75 0 L -0.75 13 L 0 13 L 0.75 13 L 0.75 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={1.500} height={13.380} viewBox="-0.750 0 1.500 13.380" fill="none" style={{
          position: "absolute",
          left: 15.73,
          top: 6.617,
          width: 1.5,
          height: 13.38,
          color: "rgb(23,23,23)",
        }}>
          <path d={"M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0 0 L 0.75 0 Z M -0.75 13.38 C -0.75 13.794 -0.414 14.13 0 14.13 C 0.414 14.13 0.75 13.794 0.75 13.38 L 0 13.38 L -0.75 13.38 Z M 0 0 L -0.75 0 L -0.75 13.38 L 0 13.38 L 0.75 13.38 L 0.75 0 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.3,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
        }}>Vector</div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <svg width={5.710} height={16.219} viewBox="0 0 5.710 16.219" fill="none" style={{
          position: "absolute",
          left: 2.289,
          top: 3.43,
          width: 5.71,
          height: 16.219,
          color: "rgb(57,56,56)",
        }}>
          <path d={"M 5.34 0.14 C 5.519 0.042 5.71 0.193 5.71 0.397 L 5.71 13.953 C 5.71 14.176 5.558 14.365 5.36 14.469 C 5.353 14.473 5.347 14.476 5.34 14.48 L 2.99 15.82 C 1.35 16.76 0 15.98 0 14.08 L 0 4.35 C 0 3.72 0.45 2.94 1.01 2.62 L 5.34 0.14 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={5.250} height={16.859} viewBox="0 0 5.250 16.859" fill="none" style={{
          position: "absolute",
          left: 9.75,
          top: 3.641,
          width: 5.25,
          height: 16.859,
          borderRadius: 0.5,
          color: "rgb(57,56,56)",
        }}>
          <path d={"M 4.972 2.462 C 5.142 2.547 5.25 2.72 5.25 2.91 L 5.25 16.063 C 5.25 16.432 4.865 16.674 4.533 16.514 L 0.283 14.466 C 0.11 14.383 0 14.208 0 14.016 L 0 0.806 C 0 0.435 0.39 0.193 0.722 0.358 L 4.972 2.462 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.3,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
        }}>Vector</div>
        <svg width={5.250} height={16.029} viewBox="0 0 5.250 16.029" fill="none" style={{
          position: "absolute",
          left: 16.75,
          top: 4.351,
          width: 5.25,
          height: 16.029,
          color: "rgb(57,56,56)",
        }}>
          <path d={"M 5.25 2.139 L 5.25 11.869 C 5.25 12.499 4.8 13.279 4.24 13.599 L 0.749 15.599 C 0.415 15.79 0 15.55 0 15.166 L 0 1.979 C 0 1.799 0.096 1.634 0.252 1.545 L 2.26 0.399 C 3.9 -0.541 5.25 0.239 5.25 2.139 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          opacity: 0.3,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
        }}>Vector</div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={21.500} height={21.477} viewBox="0 0 21.500 21.477" fill="none" style={{
            position: "absolute",
            left: 1.25,
            top: 1.273,
            width: 21.5,
            height: 21.477,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 16.54 21.477 L 4.96 21.477 C 2.22 21.477 0 19.247 0 16.507 L 0 9.097 C 0 7.737 0.84 6.027 1.92 5.187 L 7.31 0.987 C 8.93 -0.273 11.52 -0.333 13.2 0.847 L 19.38 5.177 C 20.57 6.007 21.5 7.787 21.5 9.237 L 21.5 16.517 C 21.5 19.247 19.28 21.477 16.54 21.477 Z M 8.23 2.167 L 2.84 6.367 C 2.13 6.927 1.5 8.197 1.5 9.097 L 1.5 16.507 C 1.5 18.417 3.05 19.977 4.96 19.977 L 16.54 19.977 C 18.45 19.977 20 18.427 20 16.517 L 20 9.237 C 20 8.277 19.31 6.947 18.52 6.407 L 12.34 2.077 C 11.2 1.277 9.32 1.317 8.23 2.167 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={1.500} height={4.500} viewBox="0 0 1.500 4.500" fill="none" style={{
            position: "absolute",
            left: 11.25,
            top: 14.25,
            width: 1.5,
            height: 4.5,
            color: "rgb(23,23,23)",
          }}>
            <path d={"M 0.75 4.5 C 0.34 4.5 0 4.16 0 3.75 L 0 0.75 C 0 0.34 0.34 0 0.75 0 C 1.16 0 1.5 0.34 1.5 0.75 L 1.5 3.75 C 1.5 4.16 1.16 4.5 0.75 4.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 24,
        height: 24,
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          overflow: "hidden",
        }}>
          <svg width={20.020} height={19.998} viewBox="0 0 20.020 19.998" fill="none" style={{
            position: "absolute",
            left: 1.988,
            top: 2,
            width: 20.02,
            height: 19.998,
            color: "rgb(57,56,56)",
          }}>
            <path d={"M 18.05 4.818 L 12.29 0.788 C 10.72 -0.312 8.31 -0.252 6.8 0.918 L 1.79 4.828 C 0.79 5.608 0 7.208 0 8.468 L 0 15.368 C 0 17.918 2.07 19.998 4.62 19.998 L 15.4 19.998 C 17.95 19.998 20.02 17.928 20.02 15.378 L 20.02 8.598 C 20.02 7.248 19.15 5.588 18.05 4.818 Z M 10.76 15.998 C 10.76 16.408 10.42 16.748 10.01 16.748 C 9.6 16.748 9.26 16.408 9.26 15.998 L 9.26 12.998 C 9.26 12.588 9.6 12.248 10.01 12.248 C 10.42 12.248 10.76 12.588 10.76 12.998 L 10.76 15.998 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            opacity: 0.3,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
          }}>Vector</div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Name=user, State=default
    "name=user|state=default": __body0,
    // figma: Name=user, State=active
    "name=user|state=active": __body1,
    // figma: Name=task-square, State=default
    "name=task-square|state=default": __body2,
    // figma: Name=task-square, State=active
    "name=task-square|state=active": __body3,
    // figma: Name=map, State=default
    "name=map|state=default": __body4,
    // figma: Name=map, State=active
    "name=map|state=active": __body5,
    // figma: Name=home, State=default
    "name=home|state=default": __body6,
    // figma: Name=home, State=active
    "name=home|state=active": __body7,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Icons;
