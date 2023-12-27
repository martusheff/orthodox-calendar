import styles from './DayView.styles';
import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import { getHolidayData, getSaintData } from '../../DayDataHelper';
import Expandable from '../Expandable/Expandable';

const DayView = ({ dayData, newDayData }) => {

  const getFastIcon = (fl) => {

    switch (fl) {
      case 1:
        return require('../../assets/images/fish.png')
      case 2:
        return require('../../assets/images/olive-oil.png')
      case 3:
        return require('../../assets/images/no-oil.png')
      case 4:
        return require('../../assets/images/milk-eggs4.png')
      case 6:
        return require('../../assets/images/oil-after-church.png')
      case 7:
        return require('../../assets/images/fish-caviat.png')
      default:
        return require('../../assets/images/blank.png')
    }
  }

  const getFastTitle = (fl) => {

    switch (fl) {
      case 1:
        return "Fish Allowed"
      case 2:
        return "Oil Allowed"
      case 3:
        return "No Oil"
      case 4:
        return "Milk & Eggs"
      case 6:
        return "Oil After Evening Services"
      case 7:
        return "Dried Fish"
      default:
        return "No Fast"
    }
  }

  const saints = getSaintData(dayData.date)
  const holidays = getHolidayData(dayData.date)
  // console.log(saints)
  console.log(holidays.length)

  return (
    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>

      <View style={styles.fastCellContainer}>
        <View style={styles.fastIconCell}>
          {/* <Text style={styles.aboutTitle}>{dayData.date.format("dddd")}</Text>
          <Divider style={styles.divider} width={2} color={'grey'}></Divider> */}
          <Image style={{ width: 62, height: 62 }} source={getFastIcon(newDayData.fast_level)}></Image>
        </View>
        <View style={styles.fastTitleCell}>
          <View style={styles.fastTitleCellTop}>
            <Text style={styles.fastLabel}>{dayData.date.format("dddd")}</Text>
          </View>
          <View style={styles.fastTitleCellBottom}>
            <Text style={styles.fastLabel}>{`${dayData.fastTitle ? `${dayData.fastTitle}, ` : ""}${getFastTitle(newDayData.fast_level)}`}</Text>

          </View>
        </View>
      </View>

        
      {
        saints.length > 0 &&
        <View style={styles.cell}>
          <Text style={styles.aboutTitle}>Saints & Martyrs</Text>
          <Divider style={styles.divider} width={2} color={'grey'}></Divider>
          {
            saints.map((saint) => (
              <Expandable key={saint.title} title={saint.title} description={saint.description} showDivider={false}/>
            ))
          } 


        </View>
      }


      {
        newDayData.isHoliday &&
        <View style={styles.cell}>
          <Text style={styles.aboutTitle}>Holiday</Text>
          <Divider style={styles.divider} width={2} color={'grey'}></Divider>
          {
            holidays.map((holiday) => (
              <Expandable key={holiday.title} title={holiday.title} description={holiday.description} showDivider={false}/>
            ))
          }
        </View>
      }


    </View>
    </ScrollView>

  );
};

export default DayView;
