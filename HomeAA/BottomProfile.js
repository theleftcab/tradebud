import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';

const BottomProfile = ({navigation}) => {


  const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }

  const modalizeRef = useRef(null);
  const modalizeRef1 = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };


  const onOpen1 = () => {
    modalizeRef1.current?.open();
  };

  const closeModal = () => {
    modalizeRef.current?.close();
  };


  return (
    <View style={{
      backgroundColor: "black",
      height: window.height * 0.96,
    }}>
      <View style={{
        marginHorizontal: window.width * 0.03,
        marginTop: window.height * 0.05,
        marginBottom: window.height * 0.02,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} >
        <TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>trademaster_1453</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpen}>
          <Image style={{
            width: window.width * 0.075,
            height: window.height * 0.035,
          }} source={require("../assets/add.png")} />
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=>{
          navigation.navigate('Payment')
        }}
        >
          <Image style={{
            width: window.width * 0.075,
            height: window.height * 0.035,
          }} source={require("../assets/wallet.png")} />
        </TouchableOpacity>



        <TouchableOpacity>
          <Image style={{
            width: window.width * 0.075,
            height: window.height * 0.035,
          }} source={require("../assets/message.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onOpen1}>
          <Image style={{
            width: window.width * 0.07,
            height: window.height * 0.03,
          }} source={require("../assets/three.png")} />
        </TouchableOpacity>
      </View>


      <ScrollView>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: window.width * 0.02 }}>
            <View style={{
              marginHorizontal: window.width * 0.02,
              flexDirection: 'row',
              marginTop: window.height * 0.03
            }} >
              <View style={{
                display: 'flex',
                flexDirection: 'column'
              }}>
                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.21,
                    height: window.height * 0.1,
                    marginHorizontal: window.width * 0.03,
                    marginBottom: window.height * 0.01
                  }} source={require("../assets/profile.png")} />
                </TouchableOpacity>


              </View>

            </View>

            <View style={{ flexDirection: 'column', textAlign: 'center' }}>
              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center', fontWeight: '700' }}>
                147
              </Text>

              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center' }}>
                Posts
              </Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center', fontWeight: '700' }}>
                2049
              </Text>

              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center' }}>
                Followers
              </Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center', fontWeight: '700' }}>
                241
              </Text>

              <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center' }}>
                Following
              </Text>
            </View>
          </View>


          <TouchableOpacity>
            <View style={{ marginLeft: window.width * 0.05, marginTop: window.height * 0.01 }}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>
                Trade Master
              </Text>

              <Text style={{ color: "#9ACFFF" }}>
                #master_in_trading
              </Text>

              <Text style={{ color: "#9ACFFF" }}>
                #trading_trainer
              </Text>

              <Text style={{ color: "#9ACFFF" }}>
                #trade_teacher
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: window.height * 0.02 }}>
              <View style={{ backgroundColor: "#BAB8BB", borderRadius: 10, width: window.width * 0.9, padding: window.width * 0.04, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 14 }}>
                  Professional dashboard
                </Text>

                <Text style={{ color: "#000", fontWeight: "400", fontSize: 14 }}>
                  295 accounts reached in the lasy 30 days.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ alignItems: 'center', marginTop: window.height * 0.02, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity>
              <View style={{ backgroundColor: "#BAB8BB", borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: window.width * 0.27, padding: window.width * 0.02, alignItems: 'center' }}>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>Edit Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ backgroundColor: "#BAB8BB", borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: window.width * 0.27, padding: window.width * 0.02, alignItems: 'center' }}>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>Share Profile</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ backgroundColor: "#BAB8BB", borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: window.width * 0.27, padding: window.width * 0.02, alignItems: 'center' }}>
                <Text style={{ color: "#000", fontWeight: "600", fontSize: 15 }}>More</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: window.height * 0.04, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: window.width * 0.15 }}>
            <TouchableOpacity >
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{
                  width: window.width * 0.075,
                  height: window.height * 0.035,
                }} source={require("../assets/reels.png")} />



              </View>
            </TouchableOpacity>
            <TouchableOpacity>

              <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Image style={{
                  width: window.width * 0.075,
                  height: window.height * 0.035,
                }} source={require("../assets/posts.png")} />


              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{
                  width: window.width * 0.075,
                  height: window.height * 0.035,
                }} source={require("../assets/both.png")} />
              </View>
            </TouchableOpacity>
          </View>




          <View style={{ alignItems: 'center', marginTop: window.height * 0.04, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post1.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post2.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post3.png")} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: window.height * 0.04, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post4.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post5.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post6.png")} />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: 'center', marginTop: window.height * 0.04, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post7.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post8.png")} />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image style={{
                width: window.width * 0.28,
                height: window.height * 0.14,
              }} source={require("../assets/post9.png")} />
            </TouchableOpacity>
          </View>

        </View>



        <Modalize ref={modalizeRef} scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={500} modalStyle={{
            width: window.width * 1,
            height: window.height * 0.1,
            backgroundColor: "#BAB8BB"
          }} withHandle={true} onOverlayPress={closeModal} disableScrollIfPossible={false}    >
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: window.height * 0.02 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Create</Text>
          </View>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/reels.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Reels</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/both.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Post</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/posts.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Story</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.075,
                height: window.height * 0.035,
              }} source={require("../assets/storyHightlight.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Story Highlight</Text>
            </View>
          </TouchableOpacity>
        </Modalize>

        <Modalize ref={modalizeRef1} scrollViewProps={{ showsVerticalScrollIndicator: false }}
          snapPoint={500} modalStyle={{
            width: window.width * 1,
            height: window.height * 0.1,
            backgroundColor: "#BAB8BB"
          }} withHandle={true} onOverlayPress={closeModal} disableScrollIfPossible={false}    >
         
          <TouchableOpacity
           onPress={()=>{
            navigation.navigate('Settings')
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.04, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/storyHightlight.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Settings</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.07,
                height: window.height * 0.03,
              }} source={require("../assets/insight.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Get Insight</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.08,
                height: window.height * 0.04,
              }} source={require("../assets/storyHightlight.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Your Activity</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>{
            navigation.navigate('Payment')
          }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.07,
                height: window.height * 0.025,
              }} source={require("../assets/payment.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Payment</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
               width: window.width * 0.065,
               height: window.height * 0.03,
              }} source={require("../assets/favourite.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Favorites</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: window.height * 0.02, marginHorizontal: window.width * 0.04 }}>
              <Image style={{
                width: window.width * 0.07,
                height: window.height * 0.025,
              }} source={require("../assets/discover.png")} />

              <Text style={{ fontSize: 16, fontWeight: "400", marginLeft: window.width * 0.05 }}>Discover People</Text>
            </View>
          </TouchableOpacity>
        </Modalize>
      </ScrollView>


    </View>
  )
}

export default BottomProfile;