import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import styles from './styles';

// const GOOGLE_MAPS_API_KEY = 'AIzaSyDW-CZg85-AlCv8ShPnsd-p_ax30W1HTF8';

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDW-CZg85-AlCv8ShPnsd-p_ax30W1HTF8',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyDW-CZg85-AlCv8ShPnsd-p_ax30W1HTF8',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
