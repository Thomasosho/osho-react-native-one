import { View, Text, Image, TextInput, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon, 
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  
  const navigation = useNavigation();

  useLayoutEffect(()  => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="bg-white pt-5">
      <Text className="text-red-500">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            // style={{width: 30, height: 30}}
            className="h-7 w-7 bg-slate-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-grey-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#7ab259" />
            </Text>
          </View>
          <UserIcon size={35} color="#7ab259"/>
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
          <View className="flex-row flex-1 space-x-2 bg-slate-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20}/>
            <TextInput
              placeholder='Search Tinkoko Products'
              keyboardType='default' />
          </View>

          <AdjustmentsVerticalIcon color="#7ab259" />
        </View>
      </Text>
    </View>
  )
}

export default HomeScreen