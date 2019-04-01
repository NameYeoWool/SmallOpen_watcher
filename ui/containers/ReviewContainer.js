import {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import React from "react";
import Rating from "react-native-ratings/src/rating";

export default class ReviewContainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>리뷰</Text>
        <View style={{alignItems: 'center',}}>
          <Text style={{color: '#555555', fontSize: 12}}>총 0개의 리뷰</Text>
          <Rating
            style={{paddingVertical: 10}}
            imageSize={45}
            defaultRating={5}
          />
          <Text style={{color: 'black', fontSize: 24}}>아직 리뷰를 지원하지 않습니다.</Text>
        </View>

        <View style={{height: 20}}/>

        <View style={{padding: 10, backgroundColor: '#ebebeb'}}>
          <Text>총 0개의 리뷰</Text>
        </View>

        {/*{[1, 2, 3].map(() => {*/}
          {/*return (*/}
            {/*<View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5,}}>*/}
              {/*<View style={{flexDirection: 'row', alignItems: 'center',}}>*/}
                {/*<Rating*/}
                  {/*style={{paddingVertical: 10}}*/}
                  {/*imageSize={20}*/}
                  {/*defaultRating={5}*/}
                {/*/>*/}
                {/*<View style={{flex: 1,}}/>*/}
                {/*<Text style={{color: '#555555', fontSize: 13}}>2018.11.02</Text>*/}
              {/*</View>*/}

              {/*<Text style={{color: '#555555', fontSize: 13}}>그냥 저냥 괜찮습니다..</Text>*/}
            {/*</View>*/}
          {/*);*/}
        {/*})}*/}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});