import { StarFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import { FC } from "react";

interface Props {
  starforce: number;
}

const Divider = styled.div`
  display: "flex";
  flex-direction: column;
  justify-content: center;
`;
const StarforceRender: FC<Props> = ({ starforce }) => {
  if (starforce > 15)
    return (
      <Divider>
        <div>
          {[...Array(15)].map((_, i) => (
            <StarFilled
              style={{ marginLeft: i % 5 === 0 ? "8px" : "", color: "yellow" }}
            />
          ))}
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <StarFilled
              style={{
                marginLeft: i % 5 === 0 ? "8px" : "",
                color: starforce - 15 - i > 0 ? "yellow" : "",
                opacity: starforce - 15 - i > 0 ? 1 : 0,
              }}
            />
          ))}
        </div>
      </Divider>
    );
  return [...Array(starforce)].map((_, i) => (
    <StarFilled
      style={{ marginLeft: i % 5 === 0 ? "8px" : "", color: "yellow" }}
    />
  ));
};

export default StarforceRender;
