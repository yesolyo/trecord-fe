import * as S from './style'

export const LoginProfileIntroduce = () =>{
  return (
    <S.Layout>
      <label htmlFor="profileIntroduce">소개글</label>
      <textarea rows={5} cols={33}/>
    </S.Layout>
  )
}