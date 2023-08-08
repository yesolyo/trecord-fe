import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import {  useState } from 'react'
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
export const LoginProfile = () =>{
  const [profileFile,setProfileFile] = useState<{ imgFile: string; originFile: File | null }>({
    imgFile:'',
    originFile:null
  });
  const [nickName, setNickName] = useState<string>('');
  return (
    <S.Layout>
      <LoginProfileImg profileFile={setProfileFile} profileFileValue={profileFile}/>
      <LoginProfileName nickNameValue={nickName} nickNameSetValue={setNickName}/>
      <LoginProfileIntroduce />
      <button disabled={true} >건너뛰기</button>    
    </S.Layout>
    
  )
}