class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'profile Welcome',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}