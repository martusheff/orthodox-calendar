import styles from './OCDayView.styles';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import OCExpandable from '../Expandable/OCExpandable';
import { getMockDailyReadingData } from '../../utilities/OCScriptureHelper';
import { getHolidayData, getHolidayIcon } from '../../utilities/OCHolidayHelper';
import { getSaintData } from '../../utilities/OCSaintHelper';
import { getFastIcon, getFastTitle } from '../../utilities/OCFastHelper';

const OCDayView = ({ date, dayData }) => {

  const saints = getSaintData(date)
  const holidays = getHolidayData(date)
  const fastTitle = getFastTitle(date)
  const dailyReading = getMockDailyReadingData()

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.fastCellContainer}>
          <View style={styles.fastIconCell}>
            <Image style={{ width: 62, height: 62 }} source={getFastIcon(dayData.fast_level)}></Image>
          </View>
          <View style={styles.fastTitleCell}>
            <View style={styles.fastTitleCellTopContainer}>
              <View style={styles.fastTitleCellTop}>
                <Text style={styles.fastLabel}>{date.format("dddd")}</Text>
              </View>
              {
                holidays.length > 0 && holidays.map((holiday, index) => (
                  <View style={styles.holidayIconContainer}>
                  <Image key={`holiday-icon-${index}`} source={getHolidayIcon(holiday.level)} style={styles.holidayIcon} />
                  </View>
                ))
              }
            </View>


            <View style={styles.fastTitleCellBottom}>
              <Text style={styles.fastLabel}>{`${fastTitle && fastTitle + ", "}${getFastTitle(dayData.fast_level)}`}</Text>
            </View>
          </View>
        </View>
        {
          dayData.isHoliday &&
          <View style={styles.cell}>
            <Text style={styles.aboutTitle}>Holiday</Text>
            <Divider style={styles.divider} width={2} color={'grey'}></Divider>
            {
              holidays.map((holiday) => (
                <OCExpandable key={holiday.title} title={holiday.title} description={holiday.description} showDivider={false} />
              ))
            }
          </View>
        }
        {
          saints.length > 0 &&
          <View style={styles.cell}>
            <Text style={styles.aboutTitle}>Saints & Martyrs</Text>
            <Divider style={styles.divider} width={2} color={'grey'}></Divider>
            {
              saints.map((saint) => (
                <OCExpandable key={saint.title} title={saint.title} description={saint.description} showDivider={false} />
              ))
            }
          </View>
        }

        {/* <View style={styles.cell}>
          <Text style={styles.aboutTitle}>Daily Readings</Text>
          <Divider style={styles.divider} width={2} color={'grey'}></Divider>
          <OCExpandable key={dailyReading.psalm.number} title={`Psalm ${dailyReading.psalm.number}`} description={dailyReading.psalm.content} showDivider={false} />
          <OCExpandable key={dailyReading.proverb.number} title={`Proverb ${dailyReading.proverb.number}`} description={dailyReading.proverb.content} showDivider={false} />
        </View> */}
      </View>
    </ScrollView>

  );
};

export default OCDayView;
