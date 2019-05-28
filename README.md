# react-native-tabs-section-list
React Native SectionList with scrollable tabs

<img src="https://raw.githubusercontent.com/bogoslavskiy/react-native-tabs-section-list/master/demo.gif" width="360">

## Installation

```bash
$ yarn add react-native-tabs-section-list
```

## Usage
 [See example](https://github.com/bogoslavskiy/react-native-tabs-section-list/blob/master/example/App.tsx)

## Run example
```bash
$ git clone https://github.com/bogoslavskiy/react-native-tabs-section-list.git
$ cd react-native-tabs-section-list/example
$ yarn install
$ yarn start
```

## Props

 Name | Description | Type | Default
------ | ------ | ------ | ------
`scrollToLocationOffset?` | Param is inserted into `scrollToLocation` as `viewOffset`  [See React Native Docs](https://facebook.github.io/react-native/docs/sectionlist#scrolltolocation) | `number` | 0
`tabBarStyle?` | Styles for tabBar | `ViewStyle` | undefined
`renderTab` | Callback which returns a custom React Element to use as the tab bar `(section: SectionListData<any>) ` | `React.ReactNode` | Required
`SectionList` [props...](https://facebook.github.io/react-native/docs/sectionlist#props) |  |  |

<br>

