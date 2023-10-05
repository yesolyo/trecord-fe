interface Props {
  date: string;
}
export const replaceDate = ({ date }: Props) => {
  const result = date.replace(/-/g, '. ').replace(/T/g, ' ');
  return result;
};
