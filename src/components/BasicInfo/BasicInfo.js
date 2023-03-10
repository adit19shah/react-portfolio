import "./BasicInfo.css";
import photo from "../../mylinkedinphoto.png";
import { memo } from "react";

const BasicInfo = memo(function BasicInfo() {
  return (
    <div className="basicInfo">
      <img src={photo} className="myphoto" alt="adit" />
      <h2 className="myName">Adit Shah</h2>
      <h3 className="myRole">Frontend Developer</h3>
      <h4 className="myCompany">Tekion India</h4>
    </div>
  );
});

export default BasicInfo;
