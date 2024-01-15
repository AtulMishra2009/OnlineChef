import { StyleSheet, Text, View,Image,FlatList, } from 'react-native';
import React, { useEffect, useState, } from 'react';
import { ProgressChart } from 'react-native-chart-kit';
import _ from 'lodash';
import { wrap } from 'lodash';

const Services = () => {
    const [Get, setGet] = useState([]);
    
    console.log('this is service sscreen')
    useEffect(() => {
      console.log('useeffect called');
        (async () => {
          const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=5cd5f0dfd24a17d17ad7f768401961b5&page=1';
          console.log('api called')
          await fetch(url).then(response => response.json())
            .then(result => {
              console.log('this ia api result', result)
              setGet(result);
            })
            .catch(err=>{
              console.log('eerrroe',err)
            });
        })();
    
    
      }, []);

      const renderDataItem = ({ item }) => {
        console.log('itemTitle',item.title.length)
        let logoUri = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
        // console.log('item',item.poster_path)
        return (
           
          <View style={styles.pic}>
          
           <View style={{width: 100,}}> 
            <Image
      
              source={{ uri: logoUri }}
            //   resizeMode="cover"
    
              style={{ height: 260, width: 164,borderRadius: 10,marginTop: 2,}}
             
            />
           <View style={{right:15, bottom:40,}}>
           
           <ProgressChart
              data={{
    
    data: [parseInt(_.round(parseFloat(item.vote_average*10),2))/100],
    // data:[70/100],
    colors: ['#32db23'],
  }}
 
              width={100}
              height={60}
              strokeWidth={6}
              radius={20}
              style={{zIndex:9}}
              chartConfig={{backgroundColor:'red', backgroundGradientFromOpacity: 0,backgroundGradientToOpacity: 0,color: () => '#DDDDDD',barRadius: 0,useShadowColorFromDataset: false, strokeWidth:100}}
              hideLegend={true}
              withCustomBarColorFromData={true}
              
            />
            
            <Text style={{bottom:56 ,left:24, color:'white',backgroundColor:'black', width:53,height:53,borderRadius:360,textAlign:'center',paddingTop:18, fontSize:12 }}>{parseInt(_.round(parseFloat(item.vote_average*10),2))}</Text>
            </View>
            <View style={{ bottom:70,}}>
             <Text style={styles.title}>{item.title?.length > 10 ? item.title?.substring(0,10) + '...':item.title}</Text>
            <Text style={styles.date}>{item.release_date}</Text>
            </View>
            </View>
        
          </View>
        )
      }
  return (
    <View style={styles.api}>
     <FlatList
            renderItem={renderDataItem}
            // keyExtractor={item=>item}
            data={Get.results}
            numColumns={2}
          />
           {/* <View style={styles.movies}><Text>Movies</Text></View> */}
    </View>

    
  )
}

export default Services

const styles = StyleSheet.create({
    api: {
        // marginTop: -160,
       
      },
      title:{
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    width: "150%",
    marginTop: -19,
    
    
    },
    date:{
      fontSize: 15, 
      color: 'rgba(0,0,0,0.6)'
    },
      pic:{
        flexDirection:"row",
        flex: 1,
        flexWrap: 'wrap',
        margin:10,
        
        // marginTop: 20
       },
      //  movies:{
      //   fontSize: 50,
      //   fontWeight: '900',
      //   color: 'blue',
      //   alignSelf: 'center',
      //   fontFamily: 'Muli-Extrabold',
      //   marginTop: 30
      //  }
})