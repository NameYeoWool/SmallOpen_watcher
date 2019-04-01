import {Component} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {IndicatorViewPager, PagerTabIndicator, PagerTitleIndicator} from "rn-viewpager";
import MyPCRoom from "./MyPCRoom";
import PCMap from "./PCMap";
import axios from "axios";
import SplashScreen from 'react-native-splash-screen';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
    // title: 'Welcome',
  };

  state = {
    latest: {},
  };

  componentDidMount(): void {

    axios.get('http://13.125.74.250:8000/latest/').then((res) => {
      SplashScreen.hide();
      // console.warn(res);
      this.setState({
        pc_rooms: res.data,
      }, () => {
        console.warn(this.state.pc_rooms)
      });
    }).catch((error) => {
      SplashScreen.hide();
    });
  }

  _renderTabIndicator() {
    let tabs = [{
      text: 'PC방',
      // iconSource: require('../imgs/ic_tab_home_normal.png'),
      // selectedIconSource: require('../imgs/ic_tab_home_click.png')
    }, {
      text: '지도',
      // iconSource: require('../imgs/ic_tab_task_normal.png'),
      // selectedIconSource: require('../imgs/ic_tab_task_click.png')
    },];
    return <PagerTabIndicator
      style={styles.indicatorContainer}
      tabs={tabs}/>;
  }

  render() {
    return (
      <View style={{flex: 1.}}>
        <View style={{width: '100%', height: 60, backgroundColor: '#b99ef1', alignItems: 'flex-end'}}>
          <Image
            style={{width: '40%', height: 30, marginTop: 10, marginRight: -20,}}
            source={require('../../static/watcher_logo.png')}
            resizeMode={'center'}/>
        </View>
        <IndicatorViewPager
          style={{flex: 1, paddingTop: 0, backgroundColor: 'white'}}
          indicator={this._renderTabIndicator()}
        >
          <View>
            <MyPCRoom navigation={this.props.navigation} pc_rooms={this.state.pc_rooms}/>
          </View>
          <View>
            <PCMap navigation={this.props.navigation} pc_rooms={this.state.pc_rooms}/>
          </View>
        </IndicatorViewPager>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },


  indicatorContainer: {
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});