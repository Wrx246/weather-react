import React, { useMemo } from "react";
import moment from "moment";
import "./Layout.scss";

const Layout = ({ children }) => {
  const rootClass = ["layout"];

  const time = moment().hour();

  const timeChecker = () => {
    if (time >= 20) {
      rootClass.push("night");
      return rootClass.join(" ");
    } else if (time < 20) {
      rootClass.push("day");
      return rootClass.join(" ");
    }
  };
  const styles = useMemo(() => timeChecker(time), [time]);

  return <div className={styles}>{children}</div>;
};

export default Layout;
