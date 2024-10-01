import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  dataTheme?: string;
  disableMobile?: boolean;
  leftGutter?: boolean;
  rightGutter?: boolean;
  ref?: React.MutableRefObject<any>;
};

export const Gutter: React.FC<Props> = ({
  children,
  className,
  dataTheme,
  disableMobile,
  leftGutter = true,
  rightGutter = true,
  ref: refFromProps,
}) => {
  return (
    <div
      className={` ${className || ""} ${leftGutter ? "pl-[var(--gutter-h)]" : ""} ${rightGutter ? "pr-[var(--gutter-h)]" : ""} ${disableMobile ? "md:px-0" : ""} `.trim()}
      data-theme={dataTheme}
      ref={refFromProps || null}
    >
      {children}
    </div>
  );
};
