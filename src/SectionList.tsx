import * as React from 'react';
import {
  View,
  SectionList as RNSectionList,
  SectionListProps,
  ViewStyle,
  RegisteredStyle,
  SectionListData
} from 'react-native';
import TabBar from './TabBar';

interface IProps extends SectionListProps<any> {
  scrollToLocationOffset?: number;
  tabBarStyle?: ViewStyle | RegisteredStyle<ViewStyle>;
  renderTab: (section: SectionListData<any>) => React.ReactNode;
}

interface IState {
  currentIndex: number;
}

export default class SectionList extends React.PureComponent<IProps, IState> {
  state: IState = {
    currentIndex: 0
  };

  private blockUpdateIndex: boolean = false;
  private sectionList: React.RefObject<RNSectionList<any>> = React.createRef();

  render() {
    const {
      sections,
      renderTab,
      tabBarStyle,
      scrollToLocationOffset
    } = this.props;

    const prepareSections = sections.map((item, index) => ({ ...item, index }));

    return (
      <View style={{ flex: 1 }}>
        <TabBar
          sections={prepareSections}
          renderTab={renderTab}
          tabBarStyle={tabBarStyle}
          currentIndex={this.state.currentIndex}
          onPress={(index: number) => {
            this.setState({ currentIndex: index });
            this.blockUpdateIndex = true;

            const sectionList = this.sectionList.current;
            if (sectionList && sectionList.scrollToLocation) {
              sectionList.scrollToLocation({
                animated: true,
                itemIndex: 0,
                viewOffset: scrollToLocationOffset || 0,
                sectionIndex: index
              });
            }
          }}
        />

        <RNSectionList
          {...this.props}
          sections={prepareSections}
          onViewableItemsChanged={({ viewableItems }) => {
            if (!this.blockUpdateIndex && viewableItems[0]) {
              const currentIndex = viewableItems[0].section.index;
              if (this.state.currentIndex !== currentIndex) {
                this.setState({ currentIndex });
              }
            }
          }}
          viewabilityConfig={{
            minimumViewTime: 10,
            itemVisiblePercentThreshold: 10
          }}
          ref={this.sectionList as React.RefObject<any>}
          onMomentumScrollEnd={() => (this.blockUpdateIndex = false)}
        />
      </View>
    );
  }
}
