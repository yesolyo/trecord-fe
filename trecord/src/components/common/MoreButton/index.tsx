import styled from 'styled-components';
import { Icon } from '../Icon';

const Layout = styled.div`
  width: 100%;
  .button-container {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    margin: 8px 0px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 100px;
    width: 118px;
    height: 36px;
    ${({ theme }) => theme.font.fontSize.Caption_S}
    ${({ theme }) => theme.font.fontType.R};
    color: ${({ theme }) => theme.colors.colorStyles.gray700};
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.colorStyles.gray100};
    }
  }

  .button-container::before,
  .button-container::after {
    content: '';
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

interface Props {
  title: string;
  onClick: () => void;
}
export const MoreButton = ({ title, onClick }: Props) => {
  return (
    <Layout>
      <div className="button-container">
        <button className="button" onClick={onClick}>
          {title}더보기
          <Icon iconType="arrowDown" width={16} />
        </button>
      </div>
    </Layout>
  );
};
