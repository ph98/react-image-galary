import React, { useMemo } from "react";

import { ReactComponent as ArrowLeft } from "../../assets/chevron-back-outline.svg";
import { ReactComponent as ArrowRight } from "../../assets/chevron-forward-outline.svg";
import { ReactComponent as ClosIcon } from "../../assets/close-outline.svg";
import "./style.scss";

function Button({ onClick, type, className }) {
  const Icon = useMemo(() => {
    if (type === "prev") {
      return <ArrowLeft />;
    }
    if (type === "next") {
      return <ArrowRight />;
    }
    if (type === "close") {
      return <ClosIcon />;
    }
    return null;
  }, [type]);

  return (
    <button
      className={`button ${type} ${className || ""}`}
      type="button"
      onClick={onClick}
    >
      {Icon}
    </button>
  );
}

export default Button;
