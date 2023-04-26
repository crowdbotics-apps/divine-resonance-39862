import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Screen = () => {
  const navigation = useNavigation();
  return <View style={_styles.nplOiXae}>
      <View style={_styles.tYhhzlCV}>
        <Image source={require('../assets/logo.png')} style={_styles.busaXaBS} />
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={_styles.ntvvyPuM}>
        <Text style={_styles.NiAweviN}>Welcome to the App</Text>
        <Text style={_styles.rDOGTPAb}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit.</Text>
        <TouchableOpacity style={_styles.hVooiDNS}>
          <Text style={_styles.fIsunwTr}>Open the Gate</Text>
        </TouchableOpacity>
      </View>
      <Pressable onPress={() => {
      navigation.navigate("Terms and Conditions");
    }}><View style={_styles.lxHcuEQJ}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="document-text-outline" size={24} color="black" />
        </TouchableOpacity>
      </View></Pressable>
    </View>;
};

export default Screen;

const _styles = StyleSheet.create({
  nplOiXae: {
    flex: 1
  },
  tYhhzlCV: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50
  },
  busaXaBS: {
    width: 40,
    height: 40
  },
  ntvvyPuM: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  NiAweviN: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  rDOGTPAb: {
    textAlign: "center",
    marginHorizontal: 50
  },
  hVooiDNS: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30
  },
  fIsunwTr: {
    color: "white",
    fontWeight: "bold"
  },
  lxHcuEQJ: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20
  }
});