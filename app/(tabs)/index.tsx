import { View,StyleSheet,Text } from "react-native";
import { useEffect } from "react";
import ImageViewer from "@/components/ImageViewer";
import { useAppDispatch, useAppSelector } from "@/store";
import { userGet } from "@/store/features/user/userThunks";

const imgPath = require('@/assets/images/favicon.png');

export default function Index() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log('%c [ user ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', user)


  useEffect(() => {
    dispatch(userGet());
  }, [dispatch])

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={imgPath} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
});