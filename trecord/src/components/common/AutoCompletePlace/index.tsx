import React, { useState } from 'react';
import * as S from './style';
import { List } from 'antd';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { debounce } from '@/utils/debounce';
type Props = {
  place: string;
  setPlace: React.Dispatch<
    React.SetStateAction<{
      placeName: string;
      lat: string;
      lng: string;
    }>
  >;
  labelTitle: string;
  inputTitle: string;
};

export const AutoCompletePlace = ({
  place,
  setPlace,
  labelTitle,
  inputTitle,
}: Props) => {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: import.meta.env.VITE_GOOGLE_MAP_KEY_ID,
    });
  const [isList, setIsList] = useState(false);
  const debouncedOnChange = debounce((inputValue) => {
    getPlacePredictions({ input: inputValue });
    setIsList(true);
  }, 300);
  return (
    <S.Layout>
      <label htmlFor="input_text">{labelTitle}</label>
      <input
        id="input_text"
        value={place}
        placeholder={inputTitle}
        onChange={(evt: any) => {
          const inputValue = evt.target.value;
          setPlace({
            placeName: inputValue,
            lat: '',
            lng: '',
          });
          debouncedOnChange(inputValue);
        }}
      />
      {isList && (
        <div className="modal_place">
          {!isPlacePredictionsLoading && (
            <List
              dataSource={placePredictions}
              renderItem={(item: any) => (
                <List.Item
                  onClick={() => {
                    setIsList(false);
                    geocodeByPlaceId(item.place_id)
                      .then((result) =>
                        setPlace({
                          placeName: item.description,
                          lat: result[0].geometry.location.lat().toString(),
                          lng: result[0].geometry.location.lng().toString(),
                        }),
                      )
                      .catch((err) => console.error(err));
                  }}
                >
                  <List.Item.Meta title={item.description} />
                </List.Item>
              )}
            />
          )}
        </div>
      )}
    </S.Layout>
  );
};
