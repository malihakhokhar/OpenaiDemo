const Stack = createStackNavigator();

const app = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default app;