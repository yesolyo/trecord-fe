import Skeleton from '@components/common/Skeleton';

const InputContainerFallback = ({ inputValue }: { inputValue: string }) => {
  return (
    <div className="input-wrapper">
      <div className="input-container">
        <input
          type="text"
          placeholder={'닉네임을 입력하세요'}
          id="input_text"
          value={inputValue}
          disabled
        />
        <button type="button" disabled>
          초대
        </button>
      </div>
      <div className="input-result">
        <Skeleton height="30px" />
      </div>
    </div>
  );
};

export default InputContainerFallback;
