import CloseIcon from '@/assets/components/CloseIcon';
import GalleryIcon from '@/assets/components/GalleryIcon';
import {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import * as S from './style';
interface Props {
  imgFile: { data: File | null; url: string | null };
  imgFileSetter: React.Dispatch<
    React.SetStateAction<{ data: File | null; url: string | null }>
  >;
}

const ImgInput = ({ imgFile, imgFileSetter: setImgFile }: Props) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragRef = useRef<HTMLLabelElement | null>(null);

  const labelClassName = useMemo(() => {
    if (imgFile.url) return 'no-display';
    if (isDragging) return 'dragging';
    return undefined;
  }, [imgFile, isDragging]);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFile: File;

      if (e.type === 'drop') {
        selectFile = e.dataTransfer.files[0];
      } else {
        selectFile = e.target.files[0];
      }

      const fileURL = URL.createObjectURL(selectFile);
      setImgFile({ data: selectFile, url: fileURL });
    },
    [],
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles],
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return (
    <S.Layout>
      <input
        className="no-display"
        type="file"
        id="fileUpload"
        multiple={true}
        onChange={onChangeFiles}
      />

      <label className={labelClassName} htmlFor="fileUpload" ref={dragRef}>
        <GalleryIcon />
        <div>썸네일 사진을 골라주세요</div>
      </label>

      {imgFile && imgFile.url && (
        <div className="pic">
          <img src={imgFile.url} alt={imgFile.data?.name ?? 'image'} />
          <div
            className="close-button"
            onClick={() => {
              URL.revokeObjectURL(imgFile.url as string);
              setImgFile({ data: null, url: null });
            }}
          >
            <CloseIcon />
          </div>
        </div>
      )}
    </S.Layout>
  );
};

export default ImgInput;
