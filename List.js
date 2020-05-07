import React from 'react';
import{ View, Text, FlatList, StyleSheet} from 'react-native';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            Provinsi: [
            ],
            refreshing: false
        }
        
    }
    renderItem = ({item}) => (
        <View style={styles.container1}>
            <View ><Text>{item.provinsi}</Text></View>
            <Text style={styles.box1}>{item.kasusPosi.toString()}</Text>
            <Text style={styles.box2}>{item.kasusSemb.toString()}</Text>
            <Text style={styles.box3}>{item.kasusMeni.toString()}</Text>
            </View>
    )


    onRefresh = () => {
        this.getDataApi();

    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () =>{
        this.setState({ refreshing: true})
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const json = await response.json();
        this.setState({Provinsi: json.data, refreshing: false})
    }

    render(){
         console.log(this.state.Provinsi);
        return(
            <View>
                <FlatList
                    data={this.state.Provinsi}
                    keyExtractor={item => item.fid.toString()}
                    renderItem={this.renderItem}
                    refreshing = {this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
   container1:{
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1, 
    
    },
    container2:{
        flexDirection: "row", justifyContent: 'flex-end', backgroundColor: 'blue'},
    text1:{ textAlign: 'left'},
    box1: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 25,
        width: 80,
        backgroundColor: 'gold',
        textAlign: 'center',
        borderRadius:40,
        borderWidth: 1,
        borderColor: '#fff'
    },
    box2: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 25,
        width: 80,
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        borderRadius:40,
        borderWidth: 1,
        borderColor: '#fff'
    },
    box3: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 25,
        width: 80,
        backgroundColor: 'tomato',
        textAlign: 'center',
        borderRadius:40,
        borderWidth: 1,
        borderColor: '#fff'
    }
})

export default List;