import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Button, Input } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function App() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    showTimepicker();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <ScrollView>
      <View style={styles.getStarted}>
        <View style={styles.backProfile}>
          <View style={styles.back}>
            <View>
              <AntDesign
                style={styles.back}
                name="left"
                size={20}
                color="white"
              />
            </View>
            <View style={styles.Addpayment}>
              <Text style={styles.textPayment}>Add Payment</Text>
              <Text style={styles.reminder}>Reminder</Text>
            </View>
          </View>
          <View>
            <View
              style={styles.ProfilePic}
              onClick={() => this.props.history.push("notification")}
            >
              <View>
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 50,
                    marginTop: -10,
                  }}
                  source={require("../assets/profile.png")}
                />
              </View>

              <View style={styles.Number}>
                <Text style={{ color: "white", fontSize: 13 }}>1</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.background}>
          <View style={styles.background2}>
            <View style={styles.walletVisa}>
              <Image source={require("../assets/wallet.png")} />

              <View style={{ left: 15 }}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "600" }}
                >
                  Visa Silver Credit Card
                </Text>
                <Text style={{ top: 5, color: "white" }}>Payment</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
                width: 30,
                height: 30,
                bottom: 8,
              }}
            >
              <Image source={require("../assets/update_credit_card.png")} />
            </View>
          </View>
        </View>

        <View style={styles.paymentDate}>
          <Text style={styles.selectpaymentdate}>SELECT PAYMENT DATE</Text>

          <View>
            <Calendar
              style={{
                shadowColor: "black",
                borderRadius: 10,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                marginTop: 10,
              }}
              // Date marking style [simple/period/multi-dot/single]. Default = 'simple'
              markingType={"custom"}
              theme={{
                calendarBackground: "#2b2e33",
                selectedDayTextColor: "#ffffff",
                todayTextColor: "white",
                dayTextColor: "white",
                textDisabledColor: "#999B9D",
                selectedDotColor: "#ffffff",
                arrowColor: "white",
                disabledArrowColor: "#d9e1e8",
                monthTextColor: "white",
              }}
              markedDates={{
                "2020-12-03": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#fa3a8b",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#fa3a8b",
                      fontWeight: "bold",
                    },
                  },
                },
                "2020-12-25": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#fa3a8b",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#fa3a8b",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-17": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#387CF7",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#387CF7",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-07": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#7830CE",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#7830CE",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-11": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#7830CE",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#7830CE",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-31": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#7830CE",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#7830CE",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-23": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#21D0B3",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#21D0B3",
                      fontWeight: "bold",
                    },
                  },
                },

                "2020-12-21": {
                  customStyles: {
                    container: {
                      // backgroundColor: "green",
                      borderWidth: 1,
                      borderColor: "#21D0B3",
                      borderRadius: 10,
                    },
                    text: {
                      color: "#21D0B3",
                      fontWeight: "bold",
                    },
                  },
                },
              }}
            />
            {/* <Calendar
              // Specify style for calendar container element. Default = {}
              style={{
                borderColor: "gray",
                height: 370,
                // backgroundColor: "#2b2e33",
                shadowColor: "black",
                borderRadius: 10,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                padding: 25,
                marginTop: 15,
              }}
              markingType={'custom'}

              markedDates={{
                '20120-12-23': {color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white'}

              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                // backgroundColor: "#2b2e33",
                // calendarBackground: "#2b2e33",
                // textSectionTitleColor: "white",
                // textSectionTitleDisabledColor: "pink",
                // selectedDayBackgroundColor: "pink",
                // selectedDayTextColor: "#ffffff",
                // todayTextColor: "white",
                // dayTextColor: "white",
                // textDisabledColor: "white",
                // dotColor: "#00adf5",
                // selectedDotColor: "#ffffff",
                // arrowColor: "white",
                // disabledArrowColor: "#d9e1e8",
                // monthTextColor: "white",
                // indicatorColor: "white",
                // // textDayFontFamily: "space-mono",
                // // textMonthFontFamily: "space-mono",
                // // textDayHeaderFontFamily: "space-mono",
                // textDayFontWeight: "300",
                // textMonthFontWeight: "bold",
                // textDayHeaderFontWeight: "300",
                // textDayFontSize: 16,
                // textMonthFontSize: 16,
                // textDayHeaderFontSize: 16,
              }}
            /> */}
          </View>
        </View>

        <View style={styles.backgperiodicity}>
          <View style={styles.selectDate}>
            <Text style={styles.periodicity}>PERIODICITY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "600" }}
                >
                  Monthly
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>
              HOW WOULD YOU LIKE TO GATE REMINDER?
            </Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "600" }}
                >
                  Notifications
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>
          <View style={styles.timer}>
            <DateTimePicker
              // style={{color: 'white'}}
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              color={"white"}
              // display="default"
              onChange={onChange}
            />
          </View>
        </View>

        <View style={styles.backcategory}>
          <View style={styles.selectDate}>
            <Text style={styles.periodicity}>CATEGORY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{ fontSize: 15, color: "white", fontWeight: "600" }}
                >
                  Bank
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
            >
              <Image source={require("../assets/dropdown_button.png")} />
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>COMPANY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    fontWeight: "600",
                    height: 25,
                  }}
                >
                  Bank of America
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.selectDate}>
            <Text style={styles.reminder}>AMOUNT TO PAY</Text>
          </View>

          <View style={styles.backgperiodicity2}>
            <View style={styles.walletVisa}>
              <View style={{ left: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    // borderRightColor: "gray",
                    // borderRightWidth: 1,
                    borderRightWidth: 3,
                    height: 25,
                  }}
                >
                  $
                </Text>
              </View>

              <View
                style={{
                  left: 10,
                  borderLeftWidth: 0.45,
                  borderColor: "#696969",
                  left: 30,
                  top: -7,
                  height: 30,
                  position: "absolute",
                }}
              ></View>
              <View style={{ left: 35 }}>
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    // borderRightColor: "gray",
                    // borderRightWidth: 1,
                  }}
                >
                  1,000
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity style={styles.SelectPetButton}>
            <Text
              style={{ fontSize: 18, textAlign: "center", color: "#282C31" }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={styles.homeback}>
            <Image source={require("../assets/home.png")} />
          </View>

          <View style={styles.homeback}>
            <Image source={require("../assets/chart.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/calendar.png")} />
          </View>
          <View style={styles.homeback}>
            <Image source={require("../assets/tag.png")} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SelectPetButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    // width: 220,
  },

  getStarted: {
    flex: 1,
    padding: 10,
    top: 30,
  },

  Number: {
    backgroundColor: "green",
    position: "absolute",
    borderRadius: 50,
    left: 40,
    width: 16,
    height: 16,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: -10,
  },
  back: {
    display: "flex",
    flexDirection: "row",
  },
  backProfile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Addpayment: {
    left: 5,
    top: 1,
  },
  textPayment: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  reminder: {
    color: "white",
  },
  selectpaymentdate: {
    color: "white",
    left: 5,
  },
  paymentDate: {
    marginTop: 25,
    // left: 5,
  },

  background: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    top: 15,
  },
  background2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backgperiodicity: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 10,
  },
  backgperiodicity2: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  backcategory: {
    backgroundColor: "#2b2e33",
    shadowColor: "black",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 13,
    marginTop: 5,
  },

  walletVisa: {
    display: "flex",
    flexDirection: "row",
  },

  selectDateText: {
    color: "white",
  },
  periodicity: {
    color: "white",
    left: 5,
  },

  reminder: {
    color: "white",
    left: 5,
    marginTop: 10,
  },

  homeback: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    padding: 15,
    marginTop: 10,
  },
  timer: {
    borderRadius: 10,

    backgroundColor: "#2b2e33",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // padding: 10,
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: 10,
    // height: 100
    // margin: 50,
    // fontSize: 50
  },
});
