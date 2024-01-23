import styled from "@emotion/styled";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SideBar = () => {
  return (
    <Column>
      <div>Character</div>
    </Column>
  );
};

export default SideBar;
