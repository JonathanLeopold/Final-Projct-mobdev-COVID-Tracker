import React from 'react';
import{ View, Text, FlatList, StyleSheet} from 'react-native';

class Recovered extends React.Component{
    constructor(){
        super();
        this.state = {
            Cured: [

            ],
            refreshing: false
        }
        
    }
    // renderItem = ({item}) => (
    //     <View>
    //         <Text>{item.value}</Text>
    //         <Text>{item.detail}</Text></View>
            
        
    // )


    onRefresh = () => {
        this.getDataApi();

    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () =>{
        this.setState({ refreshing: true})
        const response = await fetch('https://covid19.mathdro.id/api/')
        const json = await response.json();
        this.setState({Cured: json.recovered, refreshing: false})
    }

    render(){
        console.log(this.state.Cured)
        return(
            <View style={styles.box}>
                <Text style={styles.Title}>Sembuh</Text>
                <Text style={styles.STitle}>{this.state.Cured.value}</Text>
                {/* <FlatList
                    data={this.state.Dead}
                    keyExtractor={item => item.deaths.toString()}
                    renderItem={this.renderItem}
                    refreshing = {this.state.refreshing}
                    onRefresh={this.onRefresh}
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
   
    box: {
        paddingTop: 8,
        paddingBottom: 5,
        height: 60,
        width: 125,
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        borderRadius:40,
        borderWidth: 1,
        borderColor: '#fff'
    },
    STitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
      },
      Title: {
        color: 'black',
        textAlign: 'center',
      },
})
export default Recovered;