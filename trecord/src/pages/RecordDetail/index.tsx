import * as S from './style';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recordDetailList } from '@/types';
import { RecordDetailTitle } from '@components/RecordDetail/RecordDetailTitle';
import { RecordDetailSub } from '@components/RecordDetail/RecordDetailSub';
import { NavBarBackBtn } from '@components/common/navBar/NavBarBackBtn/index';
export const RecordDetail = () => {
  const { id } = useParams();
  const [recordData, setRecordData] = useState<recordDetailList | null>(null);
  const getToken = localStorage.getItem('acessToken');
  const navigate = useNavigate();
  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/records/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setRecordData(data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <S.Layout>
      <NavBarBackBtn
        isCategory={true}
        onBackBtnClick={() => navigate('/home')}
      />
      <S.DataBox>
        {recordData && <RecordDetailTitle recordData={recordData} />}
        {recordData && <RecordDetailSub recordData={recordData} />}
      </S.DataBox>
    </S.Layout>
  );
};
