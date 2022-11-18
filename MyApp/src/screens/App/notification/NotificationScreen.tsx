import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

import createStyles from "./NotificationScreen.style";
import Text from "components/common/Text/TextWrapper";

interface NotificationScreenProps {}

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text h1 color={colors.text}>
        Notification
      </Text>
    </View>
  );
};

export default NotificationScreen;
