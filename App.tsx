// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./src/i18n";
import Home from "./src/components/pages/Home";
import SongPageDetails from "./src/components/pages/SongPageDetails";
import SelectLanguage from "./src/components/molecules/selectLanguage";

const Stack = createStackNavigator();

export default function App() {
  const { t } = useTranslation();
  const changeLanguage = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={t("search")}
              component={Home}
              options={{
                headerRight: () => (
                  <SelectLanguage
                    language={i18n.language}
                    changeLanguage={changeLanguage}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Details"
              component={SongPageDetails}
              options={{
                headerRight: () => (
                  <SelectLanguage
                    language={i18n.language}
                    changeLanguage={changeLanguage}
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </I18nextProvider>
  );
}
