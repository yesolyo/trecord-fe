import { ReactElement, useMemo, useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import { uploadS3 } from '@/utils/image';
import ReactQuill from 'react-quill';
import * as S from './style';
const Editor = ({
  content,
  contentSetter: setContent,
}: {
  content: string;
  contentSetter: React.Dispatch<React.SetStateAction<string>>;
}): ReactElement => {
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = async () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files?.[0];
      try {
        if (file) {
          const imgUrl = await uploadS3({ imageFile: file });
          const editor = quillRef.current?.getEditor();
          const range = editor?.getSelection();
          if (range) {
            editor?.insertEmbed(range.index, 'image', imgUrl);
            editor?.setSelection({ index: range.index + 1, length: 0 });
            editor?.formatText(range.index, range.index + 1, 'height', '192px');
            editor?.formatText(range.index, range.index + 1, 'width', '342px');
          }
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [['image']],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <S.Layout>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        placeholder="당신만의 여행 기록을 남겨보세요!"
        modules={modules}
        value={content}
        onChange={setContent}
      />
    </S.Layout>
  );
};

export default Editor;
