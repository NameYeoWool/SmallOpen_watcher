import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {IndicatorViewPager, PagerTabIndicator, PagerTitleIndicator} from "rn-viewpager";
import MyPCRoom from "./MyPCRoom";
import PCMap from "./PCMap";

export default class Main extends Component {
  _renderTabIndicator() {
    let tabs = [{
      text: '내 PC방',
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
      <IndicatorViewPager
        style={{flex: 1, paddingTop: 0, backgroundColor: 'white'}}
        indicator={this._renderTabIndicator()}
      >
        <View>
          <MyPCRoom navigation={this.props.navigation}/>
        </View>
        <View>
          <PCMap navigation={this.props.navigation}/>
        </View>
      </IndicatorViewPager>
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