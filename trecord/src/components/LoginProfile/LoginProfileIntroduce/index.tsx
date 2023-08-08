interface LoginProfileIntroduce {
  introduceValue: string;
  introduceSetValue: React.Dispatch<React.SetStateAction<string>>;
}
export const LoginProfileIntroduce = ({
  introduceValue,
  introduceSetValue,
}: LoginProfileIntroduce) => {
  return (
    <textarea
      rows={5}
      cols={33}
      value={introduceValue}
      onChange={(e) => introduceSetValue(e.target.value)}
    />
  );
};
