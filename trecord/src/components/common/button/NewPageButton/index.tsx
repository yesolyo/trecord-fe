import { Icon } from '@components/common/Icon';
import styled from 'styled-components';

const Layout = styled.div``;
export const NewPageButton = () => {
  return (
    <Layout>
      <button className="page_btn">
        <span>더보기</span>
        <Icon iconType="arrowDown" width={16} />
      </button>
    </Layout>
  );
};
