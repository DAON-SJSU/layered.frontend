import * as _ from "./style";
import { useNavigate } from "react-router-dom";

interface HeaderBarProps {
  text: string;
}

const HeaderBar = ({ text }: HeaderBarProps) => {
  const navigate = useNavigate();

  return (
    <_.Header>
      <_.Icon_M
        onClick={() => {
          navigate(-1);
        }}
      >
        undo
      </_.Icon_M>
      <_.HeaderP>{text}</_.HeaderP>
    </_.Header>
  );
};

export default HeaderBar;
