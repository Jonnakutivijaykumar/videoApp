import React from 'react'
import {View,SafeAreaView, Dimensions} from 'react-native'
import CarouselItem from './CarouselItem'
import Carousel from 'react-native-snap-carousel';


const {width, height} = Dimensions.get('window')

class  CarouselScreen extends React.Component {

render() {
    const {data} = this.props;
        return (
          <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
        
              <Carousel
                layout={"default"}
                ref={(ref) => (this.carousel = ref)}
                data={data}
                loop
                sliderWidth={width}
                itemWidth={width}
                sliderHeight = {height/2}
                itemHeight = {height/1.5}
                // inactiveSlideOpacity={1}
                // inactiveSlideScale={1}
                enableSnap
                vertical = {true}
                renderItem={({ item }) => {
                  return (
                    <CarouselItem
                      item={item}
                    />
                  );
                }}
                // onSnapToItem={(index) => this.onSnapItem(index)}
              />
            </View>
          </SafeAreaView>
        );
    }
}

export default CarouselScreen;
