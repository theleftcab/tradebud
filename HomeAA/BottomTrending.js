import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

const BottomTrending = () => {
  const window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
  return (
    <View style={{
      backgroundColor: "black",
      height: window.height * 1,
    }}>
      <View style={{
        marginHorizontal: window.width * 0.03,
        marginTop: window.height * 0.05,
        marginBottom: window.height*0.02,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} >
        <Image style={{
          width: window.width * 0.2,
          height: window.height * 0.07,
        }} source={require("../assets/signup.png")} />



        <Image style={{
          width: window.width * 0.075,
          height: window.height * 0.035,
        }} source={require("../assets/message.png")} />


      </View>


      <ScrollView>
       
        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/neural.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
                <Text style={{ color: "#fff" }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/manga.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Today Trip</Text>
              </View>

              <View >
                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.78,
                    height: window.height * 0.2,
                    marginTop: window.height * 0.01,
                    marginLeft: window.width * 0.02,
                    borderRadius: 10
                  }} source={require("../assets/blur.png")} />
                </TouchableOpacity>
                <View style={{ position: "absolute", alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.2, marginVertical: window.width * 0.1 }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>7 Oct </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>Intraday Trip </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}> Length : 5 Minut</Text>
                </View>

                <View style={{ position: "absolute", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.3, marginVertical: window.width * 0.33 }}>
                  <TouchableOpacity>
                    <Image style={{
                      width: window.width * 0.05,
                      height: window.height * 0.035,
                      marginTop: window.height * 0.01,
                      marginRight: window.width * 0.02
                    }} source={require("../assets/video.png")} />
                  </TouchableOpacity>
                  <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", marginTop: window.height * 0.01 }}>₹ 5.00 </Text>
                </View>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>49</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>11</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/camelio.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Camelia Jho</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@camelia</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 17M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>My entry and impresssion#######</Text>

              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/neural.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
                <Text style={{ color: "#fff" }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/manga.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Today Trip</Text>
              </View>

              <View >
                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.78,
                    height: window.height * 0.2,
                    marginTop: window.height * 0.01,
                    marginLeft: window.width * 0.02,
                    borderRadius: 10
                  }} source={require("../assets/blur.png")} />
                </TouchableOpacity>
                <View style={{ position: "absolute", alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.2, marginVertical: window.width * 0.1 }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>7 Oct </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>Intraday Trip </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}> Length : 5 Minut</Text>
                </View>

                <View style={{ position: "absolute", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.3, marginVertical: window.width * 0.33 }}>
                  <TouchableOpacity>
                    <Image style={{
                      width: window.width * 0.05,
                      height: window.height * 0.035,
                      marginTop: window.height * 0.01,
                      marginRight: window.width * 0.02
                    }} source={require("../assets/video.png")} />
                  </TouchableOpacity>
                  <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", marginTop: window.height * 0.01 }}>₹ 5.00 </Text>
                </View>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>49</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>11</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/camelio.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Camelia Jho</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@camelia</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 17M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>My entry and impresssion#######</Text>

              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/neural.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
                <Text style={{ color: "#fff" }}>Buy <Text style={{ color: "#2C97FA", textDecorationLine: 'underline' }}>Tata Steel</Text> <Text>100 stoploss 5pt.</Text></Text>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/manga.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Trade Changer</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@tradechanger</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 1M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>Today Trip</Text>
              </View>

              <View >
                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.78,
                    height: window.height * 0.2,
                    marginTop: window.height * 0.01,
                    marginLeft: window.width * 0.02,
                    borderRadius: 10
                  }} source={require("../assets/blur.png")} />
                </TouchableOpacity>
                <View style={{ position: "absolute", alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.2, marginVertical: window.width * 0.1 }}>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>7 Oct </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>Intraday Trip </Text>
                  <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}> Length : 5 Minut</Text>
                </View>

                <View style={{ position: "absolute", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: window.width * 0.3, marginVertical: window.width * 0.33 }}>
                  <TouchableOpacity>
                    <Image style={{
                      width: window.width * 0.05,
                      height: window.height * 0.035,
                      marginTop: window.height * 0.01,
                      marginRight: window.width * 0.02
                    }} source={require("../assets/video.png")} />
                  </TouchableOpacity>
                  <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", marginTop: window.height * 0.01 }}>₹ 5.00 </Text>
                </View>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>49</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>11</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>


        <View>
          <View style={{ marginTop: window.height * 0.02, flexDirection: 'row' }}>
            <View>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.13,
                  height: window.height * 0.06,
                  marginHorizontal: window.width * 0.02,
                  marginBottom: window.height * 0.01
                }} source={require("../assets/camelio.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>Camelia Jho</Text>
                </TouchableOpacity>

                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.022,
                  marginTop: window.height * 0.004,
                  marginHorizontal: window.width * 0.02,
                }} source={require("../assets/bluetick.png")} />


                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>@camelia</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={{ color: "#fff", fontSize: 13, fontWeight: "600", marginHorizontal: window.width * 0.01, textAlign: 'center', marginTop: window.height * 0.003, }}>. 17M</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{
                    width: window.width * 0.06,
                    height: window.height * 0.0075,
                    marginTop: window.height * 0.01,
                    marginHorizontal: window.width * 0.09,
                    alignItems: 'flex-end',
                  }} source={require("../assets/dots.png")} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: window.height * 0.002, marginHorizontal: window.width * 0.015 }}>
                <Text style={{ color: "#fff", marginBottom: window.height * 0.002 }}>My entry and impresssion#######</Text>

              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', marginTop: window.height * 0.02, marginLeft: window.width * 0.18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,
                }} source={require("../assets/like.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>9230</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.06,
                  height: window.height * 0.029,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/comment.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>92</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.04,
                  height: window.height * 0.028,
                  marginTop: window.height * 0.01,


                }} source={require("../assets/save.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Save</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity>
                <Image style={{
                  width: window.width * 0.05,
                  height: window.height * 0.024,
                  marginTop: window.height * 0.01,

                }} source={require("../assets/share.png")} />
              </TouchableOpacity>
              <Text style={{ color: "#fff", marginTop: window.height * 0.01, marginHorizontal: window.width * 0.04 }}>Share</Text>
            </View>
          </View>
        </View>

      </ScrollView>

    </View>
  )
}

export default BottomTrending