import { ReactElement, useMemo, useRef } from 'react';
import styled from 'styled-components';
import 'react-quill/dist/quill.snow.css';
import { uploadS3 } from '@/utils/image';
import ReactQuill from 'react-quill';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 85vh;

  .ql-toolbar {
    border: 1px solid #e9e9e9;
    border-right: none;
    border-left: none;
    display: inline-flex;
    justify-content: end;

    width: 100%;
    @media (min-width: 431px) {
      width: 390px;
    }
    background: #fff;
    z-index: 1;
    height: 42px;
    position: fixed;
  }

  .ql-container {
    border: none;
    padding-top: 42px;
    height: 75vh;
    overflow: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .ql-editor::before {
    color: var(--gray-600, #999);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

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
    <StyledContainer>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        placeholder="당신만의 여행 기록을 남겨보세요!"
        modules={modules}
        value={content}
        onChange={setContent}
      />
    </StyledContainer>
  );
};

export default Editor;
